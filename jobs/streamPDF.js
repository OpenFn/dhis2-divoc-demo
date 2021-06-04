// Stream the PDF from DIVOC to DHIS2

getCertificateStream("1", (fileStream) => {
  const formData = new FormData();
  formData.append("file", fileStream, "certificate.pdf");

  const { baseUrl, username, password } = state.dhis2;

  return axios.post(`${baseUrl}/api/fileResources`, formData, {
    auth: { username, password },
  });
});