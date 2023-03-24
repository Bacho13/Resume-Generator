import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: null,
  name: "",
  surname: "",
  prof: "",
  about: "",
  phone: "",
  phone: "",
  email: "",
  address: "",
  bDay: "",
  nationality: "",
  langs: "",
  skills: [],
  exps: [],
  edus: [],
};

export const infoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.photo = action.payload;
    },
    addPhoto: (state, action) => {
      state.photo = action.payload;
    },
    addName: (state, action) => {
      state.name = action.payload;
    },
    addSurname: (state, action) => {
      state.surname = action.payload;
    },
    addProf: (state, action) => {
      state.prof = action.payload;
    },
    addAbout: (state, action) => {
      state.about = action.payload;
    },
    addPhone: (state, action) => {
      state.phone = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addBDay: (state, action) => {
      state.bDay = action.payload;
    },
    addNationality: (state, action) => {
      state.nationality = action.payload;
    },
    addLangs: (state, action) => {
      state.langs = action.payload;
    },
    addSkills: (state, action) => {
      if (state.skills.length > 0) {
        state.skills = [...state.skills, action.payload];
      } else {
        state.skills = [action.payload];
      }
    },
    deletSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
    addExp: (state, action) => {
      if (state.exps.length > 0) {
        state.exps = [...state.exps, action.payload];
      } else {
        state.exps = [action.payload];
      }
    },
    deletExp: (state, action) => {
      state.exps.pop();
    },
    addEdu: (state, action) => {
      if (state.edus.length > 0) {
        state.edus = [...state.edus, action.payload];
      } else {
        state.edus = [action.payload];
      }
    },
    deletEdu: (state, action) => {
      state.edus.pop();
    },
  },
});

// Action creators are generated for each case reducer functio
export const {
  addPhoto,
  addName,
  addSurname,
  addProf,
  addAbout,
  addPhone,
  addEmail,
  addAddress,
  addBDay,
  addNationality,
  addLangs,
  addSkills,
  deletSkill,
  addExp,
  deletExp,
  addEdu,
  deletEdu,
} = infoSlice.actions;

export default infoSlice.reducer;
