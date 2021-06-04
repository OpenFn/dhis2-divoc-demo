// TODO: get all TEIs with vaccination state 'NOT YET REQUESTED' via save filter from Austin.


// NOTE: if we can get a webhook with the desired info, let's drop this job!

getData('trackedEntityInstances', {
  fields: '*',
  ou: 'V5XvX1wr1kF', // traningland?
  program: 'EZkN8vYZwjR', //
  trackedEntityInstance: dataValue('id'), // the value from the post
});

alterState(state => {
  console.log('The response from DHIS2', state.data);
  console.log('Only pass necessary data to the DIVOC job.');
  const necessary = state.data.trackedEntityInstances[0];
  console.log(necessary);
  return { ...state, data: necessary };
});
