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
    deployment: [
        {
            type: Object,
        },
    ],
    accessibility: {
        type: Boolean,
        default: false,
    },
    adoptionTime: {
        type: Number,
    },
    adoptionTimeSelected: {
        type: String,
    },
    country: [
        {
            type: Object,
        },
    ],
    language: [
        {
            type: Object,
        },
    ],
    customerSegment: [
        {
            type: Object,
        },
    ],
    individualPractitionersPercentage: {
        type: Number,
    },
    lawFirmsPercentage: {
        type: Number,
    },
    inHouseLegalDepartmentsPercentage: {
        type: Number,
    },
    enterprisesPercentage: {
        type: Number,
    },
    judiciaryPercentage: {
        type: Number,
    },
    governmentDepartmentsPercentage: {
        type: Number,
    },
    startupsPercentage: {
        type: Number,
    },

    industries: [
        {
            type: Object,
        },
    ],
    practiceAreas: [
        {
            type: Object,
        },
    ],
    clientTeamSize: [
        {
            type: Object,
        },
    ],

    internalMessagingAndCommunication: { 
        type: Boolean, 
        default: false 
    },
    internalNotification: { 
        type: Boolean, 
        default: false 
    },
    internalDocumentSharing: { 
        type: Boolean, 
        default: false 
    },
    internalRealTimeDocumentEditing: { 
        type: Boolean, 
        default: false 
    },
    externalMessagingAndCommunication: { 
        type: Boolean, 
        default: false 
    },
    externalNotification: { 
        type: Boolean, 
        default: false 
    },
    externalDocumentSharing: { 
        type: Boolean, 
        default: false 
    },
    externalRealTimeDocumentEditing: { 
        type: Boolean, 
        default: false 
    },
    AnalyticsDashboard: { 
        type: Boolean, 
        default: false 
    },
    ReportGeneration: { 
        type: Boolean, 
        default: false 
    },
    DashboardCustomization: { 
        type: Boolean, 
        default: false 
    },
    ReportCustomization: { 
        type: Boolean, 
        default: false 
    },
    MultipleUserRole: { 
        type: Boolean, 
        default: false 
    },
    GranularPermission: { 
        type: Boolean, 
        default: false 
    },
    InformationAccessControl: { 
        type: Boolean, 
        default: false 
    },
    RoleBasedAccessControl: { 
        type: Boolean, 
        default: false 
    },


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
    //process coverage fields
    intake: {
        type: Boolean,
        default: false
    },
    assessment: {
        type: Boolean,
        default: false
    },
    strategize: {
        type: Boolean,
        default: false
    },
    represent: {
        type: Boolean,
        default: false
    },
    communication: {
        type: Boolean,
        default: false
    },
    review: {
        type: Boolean,
        default: false
    },
    coverage: {
        type: Boolean,
        default: false
    },
    crmAssessment: {
        type: Boolean,
        default: false
    },
    validation: {
        type: Boolean,
        default: false
    },
    implementation: {
        type: Boolean,
        default: false
    },
    monitoring: {
        type: Boolean,
        default: false
    },
    analysis: {
        type: Boolean,
        default: false
    },
    create: {
        type: Boolean,
        default: false
    },
    negotiation: {
        type: Boolean,
        default: false
    },
    cmsAuthentication: {
        type: Boolean,
        default: false
    },
    execute: {
        type: Boolean,
        default: false
    },
    store: {
        type: Boolean,
        default: false
    },
    tracking: {
        type: Boolean,
        default: false
    },
    documentPreparation: {
        type: Boolean,
        default: false
    },
    dsAuthentication: {
        type: Boolean,
        default: false
    },
    signing: {
        type: Boolean,
        default: false
    },
    encryption: {
        type: Boolean,
        default: false
    },
    verification: {
        type: Boolean,
        default: false
    },
    distribution: {
        type: Boolean,
        default: false
    },
    capture: {
        type: Boolean,
        default: false
    },
    changeManagement: {
        type: Boolean,
        default: false
    },
    documentReview: {
        type: Boolean,
        default: false
    },
    organize: {
        type: Boolean,
        default: false
    },
    accessManagement: {
        type: Boolean,
        default: false
    },
    retrieval: {
        type: Boolean,
        default: false
    },
    invoiceGeneration: {
        type: Boolean,
        default: false
    },
    authorization: {
        type: Boolean,
        default: false
    },
    distributionAndAccessibility: {
        type: Boolean,
        default: false
    },
    paymentFacilitation: {
        type: Boolean,
        default: false
    },
    eBillTracking: {
        type: Boolean,
        default: false
    },
    eBillAnalysis: {
        type: Boolean,
        default: false
    },
    discover: {
        type: Boolean,
        default: false
    },
    preserve: {
        type: Boolean,
        default: false
    },
    acquire: {
        type: Boolean,
        default: false
    },
    examine: {
        type: Boolean,
        default: false
    },
    evaluate: {
        type: Boolean,
        default: false
    },
    present: {
        type: Boolean,
        default: false
    },
    cataloging: {
        type: Boolean,
        default: false
    },
    ipAnalysis: {
        type: Boolean,
        default: false
    },
    protection: {
        type: Boolean,
        default: false
    },
    ipMonitoring: {
        type: Boolean,
        default: false
    },
    enforcement: {
        type: Boolean,
        default: false
    },
    reporting: {
        type: Boolean,
        default: false
    },
    litigationIntake: {
        type: Boolean,
        default: false
    },
    litigationStrategize: {
        type: Boolean,
        default: false
    },
    litigationPreparation: {
        type: Boolean,
        default: false
    },
    litigationSupport: {
        type: Boolean,
        default: false
    },
    analytics: {
        type: Boolean,
        default: false
    },
    outcomeEvaluation: {
        type: Boolean,
        default: false
    },
    processIdentification: {
        type: Boolean,
        default: false
    },
    workflowConfiguration: {
        type: Boolean,
        default: false
    },
    workflowValidation: {
        type: Boolean,
        default: false
    },
    workflowImplementation: {
        type: Boolean,
        default: false,
    },
    workflowTracking: {
        type: Boolean,
        default: false,
    },
    workflowOptimization: {
        type: Boolean,
        default: false,
    },


    minimumContractPeriod: {
        type: Number,
    },
    freeTrial: {
        type: Boolean,
        default: false,
    },
    freePlan: {
        type: Boolean,
        default: false,
    },
    nameOfPlans1: {
        type: String
    },
    plan1Pricing: {
        type: String
    },
    plan1Parameter1: {
        type: String
    },
    plan1Parameter2: {
        type: String
    },
    plan1Feature3: {
        type: String
    },
    note1: {
        type: String
    },
    nameOfPlans2: {
        type: String
    },
    plan2Pricing: {
        type: String
    },
    plan2Parameter1: {
        type: String
    },
    plan2Parameter2: {
        type: String
    },
    plan2Feature3: {
        type: String
    },
    note2: {
        type: String
    },
    parameter1: {
        type: String
    },
    parameter2: {
        type: String
    },
    parameter3: {
        type: String
    },
    parameter4: {
        type: String
    },
    parameter5: {
        type: String
    },
    parameter6: {
        type: String
    },
    videoLink: {
        type: String,
    },
    knowHowDocument1: {
        type: String,
    },
    knowHowDocument2: {
        type: String,
    },
    knowHowDocument3: {
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
    storageChange: [
        {
            type: Object,
        },
    ],
    fileSize: {
        type: String,
    },
    fileSizeChange: [
        {
            type: Object,
        },
    ],
    requestForChange: {
        type: Boolean,
        default: false,
    },
    postImplementationTraining: {
        type: Boolean,
        default: false,
    },
    dataMigration: {
        type: Boolean,
        default: false,
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
