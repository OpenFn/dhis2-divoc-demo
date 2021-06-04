// Link the uploaded PDF to the tracked entity instance

createEvents({
  trackedEntityInstance: tei.trackedEntityInstance,
  program: config.vaccinationProgram,
  programStage: config.certificationProgramStage,
  enrollment: tei.enrollments.find(
    (enrollment) => enrollment.program === config.vaccinationProgram
  )?.enrollment,
  orgUnit: config.captureOrgUnit,
  notes: [],
  dataValues: [
    {
      dataElement: config.certificateDataElement,
      value: fileResourceId,
    },
  ],
  status: "COMPLETED",
  eventDate: printCurrentDate(),
});
