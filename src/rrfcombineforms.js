import { combineForms } from "react-redux-form";

const allRRFFormData = combineForms({
  addarticle: {
    title: "",
    description: "",
    category: "",
    author: "",
    image: "",
    tags: [],
    published: false
  }
});

export default allRRFFormData;
