import { Product } from "../models/products.js";

export const newProduct = async (req, res) => {
    const { name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country, language, customerSegment, individualPractitionersPercentage, lawFirmsPercentage, inHouseLegalDepartmentsPercentage, enterprisesPercentage, judiciaryPercentage, governmentDepartmentsPercentage, startupsPercentage, industries, practiceAreas, clientTeamSize, internalMessagingAndCommunication, internalNotification, internalDocumentSharing, internalRealTimeDocumentEditing, externalMessagingAndCommunication, externalNotification, externalDocumentSharing, externalRealTimeDocumentEditing, analyticsDashboard, reportGeneration, dashboardCustomization, reportCustomization, multipleUserRole, granularPermission, informationAccessControl, roleBasedAccessControl, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange, intakeAndLeadManagement, clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository, contractNegotiation, lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2, documentSearchAndNavigation, authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement, invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction, legalHoldManagement, ideationAndCreation, lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch, budgetExpenseAndTimeTracking2, litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2, intake, assessment, strategize, represent, communication, review, coverage, crmAssessment, validation, implementation, monitoring, analysis, create, negotiation, cmsAuthentication, execute, store, tracking, documentPreparation, dsAuthentication, signing, encryption, verification, distribution, capture, changeManagement, documentReview, organize, accessManagement, retrieval, invoiceGeneration, authorization, distributionAndAccessibility, paymentFacilitation, eBillTracking, eBillAnalysis, discover, preserve, acquire, examine, evaluate, present, cataloging, ipAnalysis, protection, ipMonitoring, enforcement, reporting, litigationIntake, litigationStrategize, litigationPreparation, litigationSupport, analytics, outcomeEvaluation, processIdentification, workflowConfiguration, workflowValidation, workflowImplementation, workflowTracking, workflowOptimization,minimumContractPeriod, freeTrial, freePlan, nameOfPlans1, plan1Pricing, plan1Parameter1, plan1Parameter2, note1, nameOfPlans2, plan2Pricing, plan2Parameter1, plan2Parameter2, note2, parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, videoLink, knowHowDocument1, knowHowDocument2, knowHowDocument3, linkedIn, instagram, twitter, youtube, otherLink, demo, demoData, demoLink, support, supportData, training, trainingData, storage, storageChange, fileSize, fileSizeChange, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2 } = req.body;
    await Product.create({
        name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country, language, customerSegment, individualPractitionersPercentage, lawFirmsPercentage, inHouseLegalDepartmentsPercentage, enterprisesPercentage, judiciaryPercentage, governmentDepartmentsPercentage, startupsPercentage, industries, practiceAreas, clientTeamSize, internalMessagingAndCommunication, internalNotification, internalDocumentSharing, internalRealTimeDocumentEditing, externalMessagingAndCommunication, externalNotification, externalDocumentSharing, externalRealTimeDocumentEditing, analyticsDashboard, reportGeneration, dashboardCustomization, reportCustomization, multipleUserRole, granularPermission, informationAccessControl, roleBasedAccessControl, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange, intakeAndLeadManagement, clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository, contractNegotiation, lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2, documentSearchAndNavigation, authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement, invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction, legalHoldManagement, ideationAndCreation, lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch, budgetExpenseAndTimeTracking2, litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2, intake, assessment, strategize, represent, communication, review, coverage, crmAssessment, validation, implementation, monitoring, analysis, create, negotiation, cmsAuthentication, execute, store, tracking, documentPreparation, dsAuthentication, signing, encryption, verification, distribution, capture, changeManagement, documentReview, organize, accessManagement, retrieval, invoiceGeneration, authorization, distributionAndAccessibility, paymentFacilitation, eBillTracking, eBillAnalysis, discover, preserve, acquire, examine, evaluate, present, cataloging, ipAnalysis, protection, ipMonitoring, enforcement, reporting, litigationIntake, litigationStrategize, litigationPreparation, litigationSupport, analytics, outcomeEvaluation, processIdentification, workflowConfiguration, workflowValidation, workflowImplementation, workflowTracking, workflowOptimization,minimumContractPeriod, freeTrial, freePlan, nameOfPlans1, plan1Pricing, plan1Parameter1, plan1Parameter2, note1, nameOfPlans2, plan2Pricing, plan2Parameter1, plan2Parameter2, note2, parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, videoLink, knowHowDocument1, knowHowDocument2, knowHowDocument3, linkedIn, instagram, twitter, youtube, otherLink, demo, demoData, demoLink, support, supportData, training, trainingData, storage, storageChange, fileSize, fileSizeChange, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2


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
