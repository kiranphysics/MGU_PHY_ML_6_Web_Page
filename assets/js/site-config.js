/*
  CENTRAL CONFIGURATION — edit this file to customise the website.
  For each topic page, set the count first, then parallel names and links lists.
  Descriptions are optional; leave a description as "" to omit it.
  Local topic filenames are relative to that topic's folder.
*/

// 01 — UNDERSTANDING DATA
const UNDERSTANDING_DATA_NUMBER_OF_BUTTONS = 5;
const UNDERSTANDING_DATA_BUTTON_NAMES = [
  "Training  and Testing Data", "Train validation and Test Data", "Feature Scaling",
  "Duplicate Data", "Missing data"
];
const UNDERSTANDING_DATA_BUTTON_LINKS = [
  "Train_and_Test_Data.html", "Train_validation_and_Test_Data.html", "Feature_Scaling.html",
  "Duplicate_Data.html", "Missing_data.html"
];
const UNDERSTANDING_DATA_BUTTON_DESCRIPTIONS = ["", "",  "", "",  "", ""];

// 02 — CLASSIFICATION ALGORITHMS
const CLASSIFICATION_NUMBER_OF_BUTTONS = 7;
const CLASSIFICATION_BUTTON_NAMES = [
"Support Vector Machines Classifier", "K Nearest Neighbors Classifier", "Random Forest Classifier",
  "Naive Bayes Classifier", "Linear Regression Classifier", "Logistic Regression Classifier","Artificial Neural Network"
];
const CLASSIFICATION_BUTTON_LINKS = [
  "Support_Vector_Machines_Classifier.html", "K_Nearest_Neighbors.html", "Random_Forest_Classifier.html",
  "Naive_Bayes_Classifier.html", "Linear_Regression.html", "Logistic_Regression.html","Artificial_Neural_Network_ANN.html"
];

const CLASSIFICATION_BUTTON_DESCRIPTIONS = [
  "", "",
  "", "",
  "", ""
];

// 03 — REGRESSION ALGORITHMS
const REGRESSION_NUMBER_OF_BUTTONS = 6;
const REGRESSION_BUTTON_NAMES = [
  "Linear Regression", "Polynomial Regression", "Multiple Linear Regression",
  "Ridge Regression", "Lasso Regression", "Decision Tree Regression"
];
const REGRESSION_BUTTON_LINKS = [
  "../index.html", "../index.html", "../index.html",
  "../index.html", "../index.html", "../index.html"
];
const REGRESSION_BUTTON_DESCRIPTIONS = [
  "", "",
  "", "",
  "", ""
];

// 04 — FEATURE SELECTION METHODS
const FEATURE_SELECTION_NUMBER_OF_BUTTONS = 8;
const FEATURE_SELECTION_BUTTON_NAMES = [
"Forward Selection Method", "Backward Elimination Method", "Variance Threshold Method",
  "Pearson Correlation", "Chi Square Method", "ANOVA Feature Selection",
  "Regularization Feature Selection", "Random Forest Feature Selection",
];
const FEATURE_SELECTION_BUTTON_LINKS = [
  "Forward_Selection.html", "Backward_Elimination.html", "Variance_Threshold_Feature_Selection_Methode.html",
  "Pearson_Correlation_Feature_Selection.html", "Chi_Square_Filter_Method.html", "ANOVA_Feature_Selection.html",
  "L1_Regularization_Feature_Selection.html", "Decision_Trees_Random_Forest_Feature_Selection.html",
];

const FEATURE_SELECTION_BUTTON_DESCRIPTIONS = [
  "", "","", "","", "","", ""];

// PDF NOTES — add the real PDF filenames or URLs here.
const PDF_NUMBER_OF_BUTTONS = 5;
const PDF_BUTTON_NAMES = [
  "Introduction to Machine Learning", "Understanding Data", "Classification Algorithms",
  "Regression Algorithms", "Feature Selection Methods"
];
const PDF_BUTTON_LINKS = ["", "", "", "", ""];
const PDF_RESOURCE_TYPES = ["DIRECT PDF", "GOOGLE DRIVE PDF", "DIRECT PDF", "GOOGLE DRIVE PDF", "DIRECT PDF"];

// OTHER TUTORIALS — local pages or https:// URLs are accepted.
const OTHER_TUTORIALS_NUMBER_OF_BUTTONS = 6;
const OTHER_TUTORIALS_BUTTON_NAMES = [
  "Python Programming", "Numerical Methods", "Scientific Computing",
  "Mathematical Physics", "Data Analysis", "Other Learning Resources"
];
const OTHER_TUTORIALS_BUTTON_LINKS = [
  "Other_Tutorials/Python_Programming.html", "Other_Tutorials/Numerical_Methods.html",
  "Other_Tutorials/Scientific_Computing.html", "Other_Tutorials/Mathematical_Physics.html",
  "Other_Tutorials/Data_Analysis.html", "Other_Tutorials/Other_Learning_Resources.html"
];
const OTHER_TUTORIALS_RESOURCE_TYPES = ["HTML PAGE", "HTML PAGE", "HTML PAGE", "HTML PAGE", "HTML PAGE", "HTML PAGE"];

// AUTHOR DETAILS — replace these sample entries with the actual information.
window.SITE_CONFIG = {
  authors: [
    {
      name: "Dr. Blesson George", designation: "Assistant Professor", department: "Department of Physics",
      institution: "C.M.S College", address: "Kottayam",
      phone: "1234567890", email: "blesson@cmscollege.ac.in"
    },
    {
      name: "Dr.Kiran Mathew", designation: "Assistant Professor", department: "Department of Physics",
      institution: "Pavanatma College ", address: "Murickassery",
      phone: "9495128669", email: "km4physics@pavanatmacollege.org"
    }
  ],
  topicPages: {
    understandingData: { number_of_buttons: UNDERSTANDING_DATA_NUMBER_OF_BUTTONS, button_names: UNDERSTANDING_DATA_BUTTON_NAMES, button_links: UNDERSTANDING_DATA_BUTTON_LINKS, button_descriptions: UNDERSTANDING_DATA_BUTTON_DESCRIPTIONS, max_buttons: 12 },
    classification: { number_of_buttons: CLASSIFICATION_NUMBER_OF_BUTTONS, button_names: CLASSIFICATION_BUTTON_NAMES, button_links: CLASSIFICATION_BUTTON_LINKS, button_descriptions: CLASSIFICATION_BUTTON_DESCRIPTIONS, max_buttons: 12 },
    regression: { number_of_buttons: REGRESSION_NUMBER_OF_BUTTONS, button_names: REGRESSION_BUTTON_NAMES, button_links: REGRESSION_BUTTON_LINKS, button_descriptions: REGRESSION_BUTTON_DESCRIPTIONS, max_buttons: 12 },
    featureSelection: { number_of_buttons: FEATURE_SELECTION_NUMBER_OF_BUTTONS, button_names: FEATURE_SELECTION_BUTTON_NAMES, button_links: FEATURE_SELECTION_BUTTON_LINKS, button_descriptions: FEATURE_SELECTION_BUTTON_DESCRIPTIONS, max_buttons: 12 }
  },
  pdfNotes: { number_of_buttons: PDF_NUMBER_OF_BUTTONS, button_names: PDF_BUTTON_NAMES, button_links: PDF_BUTTON_LINKS, button_types: PDF_RESOURCE_TYPES },
  otherTutorials: { number_of_buttons: OTHER_TUTORIALS_NUMBER_OF_BUTTONS, button_names: OTHER_TUTORIALS_BUTTON_NAMES, button_links: OTHER_TUTORIALS_BUTTON_LINKS, button_types: OTHER_TUTORIALS_RESOURCE_TYPES }
};
