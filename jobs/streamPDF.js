// TODO: can we get a list of TEIs with vaccination state = "REQUESTED, NOT YET UPLOADED."

//  Program stages in DHIS2:
//  1 - ready for certificate generation, limit 50 (then request generation from DIVOC)
//  2 - certificate generation requested
//  3a - certificate uploaded
//  3b - certificate generated

// "async bi-directional filestreaming" | "async bi-directional links"
// -------------------------------------|-------------
// "webhooks fileStreaming"             | "webhooks only links"

// ===============================================
// TOTALLY ASYNC STRUCTURE (storing a PDF on dhis2)
// -----------------------------------------------
// FLOW 1 --->
// getListOfReadyTEIs (state 1 ) (50p)
// .then(requestCertForTEIs) (50p)
// .then(updateTEIsToState2) (50p)

// FLOW 2 <---
// getListOfState2teis
// streamPDFs
// createEventsFor50, set state = 3a
// ===============================================

// ===============================================
// TOTALLY SYNC STRUCTURE (link to certificate)
// -----------------------------------------------
// receiveWebhookAndGetTEI ()
// .then(requestCertforTEI)
// .then(response => {
//   console.log('We got a:', response.status)
// })
// .then(updateTEItoState3b)

// ===============================================



// Stream the PDF from DIVOC to DHIS2
getCertificateStream(
  // the preenrollment code...
  //   dataValue('id'),
  '1',
  // the handler for the stream...
  fileStream => {
    const formData = new FormData();
    formData.append('file', fileStream, 'certificate.pdf');

    const { baseUrl, username, password } = state.dhis2;

    return axios.post(`${baseUrl}/api/35/fileResources`, formData, {
      auth: { username, password },
    });
  }
);
