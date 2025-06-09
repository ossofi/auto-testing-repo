export function generateUserData() {
    const timestamp = Date.now();
    const genders = ['Male', 'Female', 'Other'];
  
    return {
      firstName: `User${timestamp}`,
      lastName: `Test${timestamp}`,
      email: `user${timestamp}@test.com`,
      gender: genders[Math.floor(Math.random() * genders.length)],
      phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      currentAddress: `Current Address ${timestamp}`,
      permanentAddress: `Permanent Address ${timestamp}`
    };
  }
  