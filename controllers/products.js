import { Product } from "../models/products.js";

export const newProduct = async (req, res) => {
    const { name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country, language, customerSegment, customerSegmentPercentage, industries, practiceAreas, clientTeamSize, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange, intakeAndLeadManagement, clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository, contractNegotiation, lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2, documentSearchAndNavigation, authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement, invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction, legalHoldManagement, ideationAndCreation, lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch, budgetExpenseAndTimeTracking2, litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2,minimumContractPeriod, freeTrial, freePlan, plan1Feature1, plan1Feature2, plan1Feature3, plan2Feature1, plan2Feature2, plan2Feature3, videoLink, knowHowDocument, linkedIn, instagram, twitter, youtube, otherLink, demo, demoData, demoLink, support, supportData, training, trainingData, storage, storageChange, fileSize,fileSizeChange, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2 } = req.body;
    await Product.create({
        name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country,  language, customerSegment, customerSegmentPercentage, industries, practiceAreas, clientTeamSize, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange,  intakeAndLeadManagement,clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository,contractNegotiation,  lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2,documentSearchAndNavigation,authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement,invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction,legalHoldManagement,  ideationAndCreation,lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch,budgetExpenseAndTimeTracking2,litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2,minimumContractPeriod, freeTrial, freePlan, plan1Feature1,plan1Feature2, plan1Feature3, plan2Feature1, plan2Feature2,plan2Feature3, videoLink, knowHowDocument, linkedIn, instagram, twitter, youtube, otherLink, demo,demoData, demoLink, support, supportData, training, trainingData, storage,storageChange, fileSize,fileSizeChange, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2


    });
    res.status(201).json({
        success: true,
        message: "New Product Added Successfully",
    })
};

export const getAllProducts = async (req, res) => {
    const user_id = req.user._id;
    const tasks = await Product.find({ user: user_id });
    res.status(200).json({
        success: true,
        tasks,
    })
};

export const updateProducts = async (req, res, next) => {

    const task = await Product.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Task not found", 404));
    task.isComplete = !task.isComplete;
    await task.save();
    res.status(200).json({
        success: true,
        message: "Updated Successfully",
    });
}

export const deleteProduct = async (req, res, next) => {

    const task = await Product.findById(req.params.id);
    if (!task) return next(new Error("Invalid Id"));
    await task.deleteOne();
    res.status(200).json({
        success: true,
        message: "Updated Successfully"
    });
} 
