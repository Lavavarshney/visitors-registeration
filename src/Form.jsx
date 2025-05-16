import React, { useState, useEffect } from 'react';
import { User, Home, Package, Clock, UserCheck, MoreHorizontal } from 'lucide-react';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    flatNumber: '',
    purpose: 'Delivery',
    mobile: '',
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [visitorLogs, setVisitorLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('form');

  // Load visitor logs from localStorage on mount
  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('visitorLogs')) || [];
    setVisitorLogs(storedLogs);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Validate mobile number
  const validate = () => {
    const newErrors = {};
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store data
    const newLog = { ...formData, timestamp: new Date().toLocaleString() };
    const updatedLogs = [...visitorLogs, newLog];
    setVisitorLogs(updatedLogs);
    localStorage.setItem('visitorLogs', JSON.stringify(updatedLogs));
    setSubmittedData(newLog);

    // Reset form
    setFormData({ fullName: '', flatNumber: '', purpose: 'Delivery', mobile: '' });
    setErrors({});
    
    // Switch to confirmation tab
    setActiveTab('confirmation');
  };

  // Get icon based on purpose
  const getPurposeIcon = (purpose) => {
    switch (purpose) {
      case 'Delivery': return <Package size={18} />;
      case 'Guest': return <UserCheck size={18} />;
      case 'Maintenance': return <Home size={18} />;
      case 'Other': return <MoreHorizontal size={18} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-3">
            <UserCheck size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Visitor Registration</h1>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('form')}
              className={`flex-1 py-4 px-6 font-medium ${activeTab === 'form' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-blue-500'}`}
            >
              Registration Form
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-4 px-6 font-medium ${activeTab === 'history' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-blue-500'}`}
            >
              Visitor History
            </button>
            {submittedData && (
              <button 
                onClick={() => setActiveTab('confirmation')}
                className={`flex-1 py-4 px-6 font-medium ${activeTab === 'confirmation' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-blue-500'}`}
              >
                Confirmation
              </button>
            )}
          </div>

          {/* Form Tab */}
          {activeTab === 'form' && (
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="flex items-center mb-2 text-gray-700 font-medium">
                    <User size={18} className="mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter visitor's full name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center mb-2 text-gray-700 font-medium">
                    <Home size={18} className="mr-2 text-blue-500" />
                    Flat Number
                  </label>
                  <input
                    type="text"
                    name="flatNumber"
                    value={formData.flatNumber}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter flat number (e.g., A-101)"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center mb-2 text-gray-700 font-medium">
                    <Package size={18} className="mr-2 text-blue-500" />
                    Purpose of Visit
                  </label>
                  <div className="relative">
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="Delivery">Delivery</option>
                      <option value="Guest">Guest</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center mb-2 text-gray-700 font-medium">
                    <svg className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-blue-500 transition-all ${errors.mobile ? 'border-red-500 bg-red-50' : 'focus:ring-blue-500'}`}
                    placeholder="Enter 10-digit mobile number"
                    required
                  />
                  {errors.mobile && (
                    <p className="mt-2 text-red-600 flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.mobile}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <UserCheck size={20} className="mr-2" />
                  Register Visitor
                </button>
              </form>
            </div>
          )}

          {/* Confirmation Tab */}
          {activeTab === 'confirmation' && submittedData && (
            <div className="p-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6">
                <div className="bg-green-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-green-800 mb-2">Registration Successful!</h2>
                <p className="text-green-700">The visitor has been registered successfully.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-blue-500" />
                  Registration Details
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Visitor Name</p>
                    <p className="font-medium">{submittedData.fullName}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Flat Number</p>
                    <p className="font-medium">{submittedData.flatNumber}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Purpose of Visit</p>
                    <p className="font-medium flex items-center">
                      {getPurposeIcon(submittedData.purpose)}
                      <span className="ml-2">{submittedData.purpose}</span>
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Mobile Number</p>
                    <p className="font-medium">{submittedData.mobile}</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Registration Time</p>
                    <p className="font-medium">{submittedData.timestamp}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => setActiveTab('form')}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Register Another Visitor
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock size={20} className="mr-2 text-blue-500" />
                Visitor History
              </h2>
              
              {visitorLogs.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-2 text-gray-500">No visitor records found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-3 px-4 text-left font-medium text-gray-600">Name</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-600">Flat</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-600">Purpose</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-600">Mobile</th>
                        <th className="py-3 px-4 text-left font-medium text-gray-600">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visitorLogs.map((log, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-3 px-4 border-t">{log.fullName}</td>
                          <td className="py-3 px-4 border-t">{log.flatNumber}</td>
                          <td className="py-3 px-4 border-t flex items-center">
                            {getPurposeIcon(log.purpose)}
                            <span className="ml-2">{log.purpose}</span>
                          </td>
                          <td className="py-3 px-4 border-t">{log.mobile}</td>
                          <td className="py-3 px-4 border-t text-gray-500 text-sm">{log.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Building Management System
        </div>
      </div>
    </div>
  );
}

export default Form;