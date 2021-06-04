// Request a certificate from DIVOC for this person

// TODO: consider checking for an existing cert.
// checkExistingCert();
certify([
  {
    preEnrollmentCode: dataValue('id'),
    recipient: {
      name: 'string',
      dob: '2008-06-03',
      //  age: 'string',
      gender: 'string',
      nationality: 'string',
      identity: 'string',
      contact: ['string'],
      address: {
        addressLine1: 'string',
        addressLine2: 'string',
        district: 'string',
        state: 'string',
        pincode: '123',
      },
    },
    vaccination: {
      name: 'string',
      batch: 'string',
      manufacturer: 'string',
      date: '2021-06-03T11:52:31.283Z',
      effectiveStart: '2021-06-03',
      effectiveUntil: '2021-06-03',
      dose: 1,
      totalDoses: 2,
    },
    vaccinator: {
      name: 'string',
    },
    facility: {
      name: 'string',
      address: {
        addressLine1: 'string',
        addressLine2: 'string',
        district: 'string',
        state: 'string',
        pincode: '123',
      },
    },
    meta: {},
  },
]);
