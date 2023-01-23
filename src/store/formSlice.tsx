const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
  name: "form",
  initialState: {
    requistionForm: {
      requestTitle: "-",
      owner: "-",
      hiringManager: "-",
      noOfOpenings: "0",
      urgency: "-",
      employmentType: "-",
      prefferedGender: "-",
      status: "-",
    },
    jobDetails: {
      jobTitle: "-",
      jobDetails: "-",
      jobLocation: "-",
    },
    interviewSettings: {
      interviewMode: "-",
      interviewDuration: "-",
      interviewLanguage: "-",
    },
  },
  reducers: {
    addData: (state: any, action: any) => {
      state[action.payload.type] = action.payload.data;
    },
    resetData: (state: any, action: any) => {
      Object.keys(state).map((key) => {
        state[key] = null;
      });
    },
  },
});

export const { addData, resetData } = formSlice.actions;
export default formSlice.reducer;
