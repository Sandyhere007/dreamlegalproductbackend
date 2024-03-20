// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//     },
//     overview: {
//         type: String,
//     },
//     uniqueSellingProposition: {
//         type: String,
//         maxlength: 1500,
//     },
//     category: [
//         {
//             type: String,
//         },
//     ],
//     deployment: [{
//         type: String,
//     },],
//     accessibility: {
//         type: Boolean,
//         default: false
//     },
//     adoptionTime: {
//         type: Number,
//     },
//     country: [{
//         type: String,
//     },],
//     language: [{
//         type: String,
//     },],
//     customerSegment: [{
//         type: String,
//     },],
//     customerSegmentPercentage: {
//         type: Number,
//     },

//     industries: [{
//         type: String,
//     },],
//     practiceAreas: [{
//         type: String,
//     },],
//     clientTeamSize: [
//         {
//             type: String,
//         },],
//     minimumContractPeriod: {
//         type: Number,
//     },
//     freeTrial: {
//         type: Boolean,
//         default: false
//     },
//     freePlan: {
//         type: Boolean,
//         default: false
//     },
//     plan1Feature1: {
//         type: String,
//     },
//     plan1Feature2: {
//         type: String,
//         required: false,
//     },
//     plan1Feature3: {
//         type: String,
//         required: false,
//     },
//     plan2Feature1: {
//         type: String,
//     },
//     plan2Feature2: {
//         type: String,
//         required: false,
//     },
//     plan2Feature3: {
//         type: String,
//         required: false,
//     },
//     videoLink: {
//         type: String,
//     },
//     knowHowDocument: {
//         type: String,
//     },
//     linkedIn: {
//         type: String,
//     },
//     instagram: {
//         type: String,
//     },
//     twitter: {
//         type: String,
//     },
//     youtube: {
//         type: String,
//     },
//     otherLink: {
//         type: String,
//     },
//     demoData: [
//         {
//             type: String,
//         },
//     ],
//     demoLink: {
//         type: String,
//     },
//     support: {
//         type: Boolean,
//     },
//     supportData: [
//         {
//             type: String,
//         },
//     ],
//     training: {
//         type: Boolean,
//     },
//     trainingData:[
//     {
//         type: String,
//     },
// ],
//     storage: {
//         type: String,
//     },
//     memoryChange: {
//         type: String,
//     },
//     fileSize: {
//         type: String,
//     },
//     requestForChange: {
//         type: Boolean,
//         default: false
//     },
//     postImplementationTraining: {
//         type: Boolean,
//         default: false
//     },
//     dataMigration: {
//         type: Boolean,
//         default: false
//     },
//     userTestimonialName1: {
//         type: String,
//     },
//     userTestimonialDesignation1: {
//         type: String,
//     },
//     userTestimonialCompany1: {
//         type: String,
//     },
//     userTestimonialComment1: {
//         type: String,
//     },
//     userTestimonialName2: {
//         type: String,
//     },
//     userTestimonialDesignation2: {
//         type: String,
//     },
//     userTestimonialCompany2: {
//         type: String,
//     },
//     userTestimonialComment2: {
//         type: String,
//     },
// });



// export const Product = mongoose.model("productData", productSchema); 
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    overview: {
        type: String,
    },
    uniqueSellingProposition: {
        type: String,
        maxlength: 1500,
    },
    category: [
        {
            type: Object,
        },
    ],
    deployment: [{
        type: Object,
    },],
    accessibility: {
        type: Boolean,
        default: false
    },
    adoptionTime: {
        type: Number,
    },
    adoptionTimeSelected: {
        type: String,
    },
    country: [{
        type: Object,
    },],
    language: [{
        type: Object,
    },],
    customerSegment: [{
        type: Object,
    },],
    customerSegmentPercentage: {
        type: Number,
    },

    industries: [{
        type: Object,
    },],
    practiceAreas: [{
        type: Object,
    },],
    clientTeamSize: [
        {
            type: Object,
        },],
    internalCollaboration: [
        {
            type: Object,
        },
    ],
    externalCollaboration: [
        {
            type: Object,
        },
    ],
    analyticsAndReporting: [
        {
            type: Object,
        },
    ],
    toolAdministrationAndControlChange: [
        {
            type: Object,
        },
    ],
    intakeAndLeadManagement: [
        {
            type: Object,
        },
    ],
    clientPortal: [
        {
            type: Object,
        },
    ],
    documentManagement: [
        {
            type: Object,
        },
    ],
    caseAlerts: [
        {
            type: Object,
        },
    ],
    budgetExpenseAndTimeTracking: [
        {
            type: Object,
        },
    ],
    clientBillingAndInvoicing: [
        {
            type: Object,
        },
    ],
    policyManagement: [
        {
            type: Object,
        },
    ],
    issueManagement: [
        {
            type: Object,
        },
    ],
    lawsComplianceAndRegulatoryTracking: [
        {
            type: Object,
        },
    ],
    contractCreationAndAuthoring: [
        {
            type: Object,
        },
    ],
    contractRepository: [
        {
            type: Object,
        },
    ],
    contractNegotiation: [
        {
            type: Object,
        },
    ],
    lifecycleManagement: [
        {
            type: Object,
        },
    ],
    clauseLibrary: [
        {
            type: Object,
        },
    ],
    fieldsCreation: [
        {
            type: Object,
        },
    ],
    trackingAndValidity: [
        {
            type: Object,
        },
    ],
    documentManagementAndTemplates: [
        {
            type: Object,
        },
    ],
    documentCapturing: [
        {
            type: Object,
        },
    ],
    documentCreationAndTemplates: [
        {
            type: Object,
        },
    ],
    documentCapturing2: [
        {
            type: Object,
        },
    ],
    documentSearchAndNavigation: [
        {
            type: Object,
        },
    ],
    authentication: [
        {
            type: Object,
        },
    ],
    taskAllotment: [
        {
            type: Object,
        },
    ],
    budgetingExpenseAndTimeTracking: [
        {
            type: Object,
        },
    ],
    clientManagement: [
        {
            type: Object,
        },
    ],
    invoiceGenerationAndReview: [
        {
            type: Object,
        },
    ],
    dataIdentificationAndCollection: [
        {
            type: Object,
        },
    ],
    searchProcessingAndAnalysis: [
        {
            type: Object,
        },
    ],
    reviewAndProduction: [
        {
            type: Object,
        },
    ],
    legalHoldManagement: [
        {
            type: Object,
        },
    ],
    ideationAndCreation: [
        {
            type: Object,
        },
    ],
    lifecycleManagement2: [
        {
            type: Object,
        },
    ],
    searchAndDiscovery: [
        {
            type: Object,
        },
    ],
    storageAndRepository: [
        {
            type: Object,
        },
    ],
    matterLifecycleTracking: [
        {
            type: Object,
        },
    ],
    courtAndCaseSearch: [
        {
            type: Object,
        },
    ],
    budgetExpenseAndTimeTracking2: [
        {
            type: Object,
        },
    ],
    litigationDocketingFeatures: [
        {
            type: Object,
        },
    ],
    workflowDesignAndConfiguration: [
        {
            type: Object,
        },
    ],
    assignmentAllotmentAndTracking: [
        {
            type: Object,
        },
    ],
    documentCreationAndManagement: [
        {
            type: Object,
        },
    ],
    lawsComplianceAndRegulatoryTracking2: [
        {
            type: Object,
        },
    ],
    

    minimumContractPeriod: {
        type: Number,
    },
    freeTrial: {
        type: Boolean,
        default: false
    },
    freePlan: {
        type: Boolean,
        default: false
    },
    plan1Feature1: {
        type: String,
    },
    plan1Feature2: {
        type: String,
        required: false,
    },
    plan1Feature3: {
        type: String,
        required: false,
    },
    plan2Feature1: {
        type: String,
    },
    plan2Feature2: {
        type: String,
        required: false,
    },
    plan2Feature3: {
        type: String,
        required: false,
    },
    videoLink: {
        type: String,
    },
    knowHowDocument: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    instagram: {
        type: String,
    },
    twitter: {
        type: String,
    },
    youtube: {
        type: String,
    },
    otherLink: {
        type: String,
    },
    demoData: [
        {
            type: Object,
        },
    ],
    demoLink: {
        type: String,
    },
    support: {
        type: Boolean,
    },
    supportData: [
        {
            type: Object,
        },
    ],
    training: {
        type: Boolean,
    },
    trainingData: [
        {
            type: Object,
        },
    ],
    storage: {
        type: String,
    },
    memoryChange: [{
        type: Object,
    },],
    fileSize: {
        type: String,
    },
    requestForChange: {
        type: Boolean,
        default: false
    },
    postImplementationTraining: {
        type: Boolean,
        default: false
    },
    dataMigration: {
        type: Boolean,
        default: false
    },
    userTestimonialName1: {
        type: String,
    },
    userTestimonialDesignation1: {
        type: String,
    },
    userTestimonialCompany1: {
        type: String,
    },
    userTestimonialComment1: {
        type: String,
    },
    userTestimonialName2: {
        type: String,
    },
    userTestimonialDesignation2: {
        type: String,
    },
    userTestimonialCompany2: {
        type: String,
    },
    userTestimonialComment2: {
        type: String,
    },
});



export const Product = mongoose.model("productData", productSchema); 
