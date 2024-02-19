


//localhost:5000/api/v1/conversionOfLead
payload={
    "customer_type": "New User",
    "new_location_site": "",
    "associated_company": "Test Medical",
    "segment": 2,
    "certificate_type": 4,
    "lead_created_by_name": "Arpit SP",
    "first_name": "erert",
    "last_name": "rteert",
    "email": "mailto:etertr@gdfg.co",
    "categories": 3,
    "emplyoment_type": null,
    "job_title": "wrer",
    "urd_number": null,
    "br_number": "50000008",
    "street_address": "erwer",
    "address2": "werwer",
    "city": 5918,
    "state": 44,
    "country": 1,
    "postal_code_id": 35345,
    "region": 5,
    "regional_bussiness_lead": 4,
    "global_managing_director": "Dr. Murgan",
    "global_manager_sales": 21,
    "website_url": "https://www.ddd.com",
    "phone_number": "4334434343",
    "mobile_number": "4343433434",
    "dqs_contact_source": 2,
    "contact_owner": "Arpit SP",
    "lead_created_date": "2024-02-17T10:16:41.907Z",
    "standard_program_assement": 82,
    "remarks": "tyuytu",
    "lead_validate_stage": null,
    "validated_by": "Arpit SP",
    "lead_validated_date": "2024-02-17T10:42:33.485Z",
    "lead_validate_remarks": "fdgf",
    "lead_assgn_contact_owner": 124,
    "assigned_by": "Arpit SP",
    "assigned_date": "2024-02-17T10:42:33.485Z",
    "stage": "Approved",
    "lead_assgn_remark": "dfgfg",
    "industry_sector": null,
    "customer_category": "Pvt Ltd",
    "employee_count": 543,
    "company_remarks": "fdgfgdg",
    "gst_applicable": "Not Applicable",
    "gst_number": null,
    "pan_number": null,
    "tan_number": null,
    "phone_code": "4345",
    "mobile_code": "+93",
    "status": "Account",
    "CorporateGroupBusinessRelationId": "50000006",
    "lead_parent_generation_id": "138",
    "IndustryCodeId": 1,
    "CustomerServicePersonId": "IND0000124",
    "RelationTypeId": 1,
    "IsMainLocation": false,
    "LocationTypeId": 1,
    "segment_name": "MED",
    "country_name": "Afghanistan",
    "state_name": "Baglan",
    "ParentBusinessRelationId": "50000004",
    "city_name": "Dahaneh-ye Ghawri",
    "region_name": "South",
    "certificate_type_name": "Non-Cert",
    "is_child_Conversion": true
}


exports.conversionOfLead = async (req, res) => {
    try {
     /// need to build logic only single (cert/non_cert) will be single
     
     var {
       customer_type,
       new_location_site,
       is_child_Conversion,
       ParentBusinessRelationId,
       IsMainLocation,
       associated_company,
       segment,
       certificate_type,
       lead_created_by_name,
       first_name,
       last_name,
       country_name,
       state_name,
       city_name,
       region_name,
       contact_owner_name,
       lead_assgn_contact_owner,
       email,
       categories,
       employment_type, 
       job_title,
       urd_number,
       br_number,
       street_address,
       address2,
       city,
       state,
       country,
       segment_name,
       postal_code_id,
       postal_code,
       region,
       regional_business_lead, 
       global_managing_director,
       global_manager_sales,
       website_url,
       phone_number,
       mobile_number,
       dqs_contact_source,
       contact_owner,
       lead_created_date,
       contact_owner,
       remarks,
       lead_validate_stage,
       validated_by,
       lead_validated_date,
       lead_validate_remarks,
       lead_assign_contact_owner, 
       assigned_by,
       assigned_date,
       stage,
       lead_assign_remark, 
       industry_sector,
       customer_category,
       employee_count,
       company_remarks,
       gst_applicable,
       gst_number,
       certificate_type_name,
       pan_number,
       tan_number,
       phone_code,
       mobile_code,
       status,
       CorporateGroupBusinessRelationId,
       IndustryCodeId,
       CustomerServicePersonId,
       RelationTypeId,
       IsMainLocation,
       LocationTypeId
     } = req.body;
     
     var matchingData  = await lead_managment.findAll({ where: {
       [Op.and]: [
         { br_number: br_number },
         { certificate_type: certificate_type },
       ]
     }})
     if(matchingData.length > 0){
       if(certificate_type ==1){
         return res.status(200).send({ code: 200, message: `Lead converson for Cert already exists`  });
       }
       else{
         var response = await lead_managment.create({
           customer_type,
           new_location_site,
           associated_company,
           IsMainLocation,
           is_child_Conversion,
           segment,
           certificate_type,
           lead_created_by_name,
           first_name,
           last_name,
           certificate_type_name,
           email,
           segment_name,
           ParentBusinessRelationId,
           categories,
           employment_type, 
           job_title,
           urd_number,
           br_number,
           street_address,
           address2,
           city,
           lead_assign_contact_owner,
           country_name,
           state_name,
           city_name,
           region_name,
           contact_owner_name,
           state,
           country,
           postal_code_id,
           postal_code,
           region,
           regional_business_lead, 
           global_managing_director,
           global_manager_sales,
           website_url,
           phone_number,
           mobile_number,
           dqs_contact_source,
           contact_owner,
           lead_created_date,
           contact_owner,
           remarks,
           lead_validate_stage,
           validated_by,
           lead_validated_date,
           lead_validate_remarks,
           assigned_by,
           assigned_date,
           lead_assgn_contact_owner,
           stage,
           lead_assign_remark, 
           industry_sector,
           customer_category,
           employee_count,
           company_remarks,
           gst_applicable,
           gst_number,
           pan_number,
           tan_number,
           phone_code,
           mobile_code,
           status,
           CorporateGroupBusinessRelationId,
           IndustryCodeId,
           CustomerServicePersonId,
           RelationTypeId,
           IsMainLocation,
           LocationTypeId
         }); 
         // let certificate_data= response.certificate_type==3? 4 : 3

         var responsedata = await lead_managment.update({
           lead_parent_generation_id: response.lead_genration_id,
           // certificate_type: certificate_data
         }, {  where: { lead_genration_id:  response.lead_genration_id}}); 
 
         return res.status(200).send({ code: 200, message: `Lead converson Create success`, data: responsedata  });
       }
     }
     else if (matchingData == null || matchingData.length ==0 ){
     var response = await lead_managment.create({
       customer_type,
       new_location_site,
       associated_company,
       IsMainLocation,
       is_child_Conversion,
       segment,
       certificate_type,
       lead_created_by_name,
       first_name,
       last_name,
       certificate_type_name,
       email,
       segment_name,
       ParentBusinessRelationId,
       categories,
       employment_type, 
       job_title,
       urd_number,
       br_number,
       street_address,
       address2,
       city,
       lead_assign_contact_owner,
       country_name,
       state_name,
       city_name,
       region_name,
       contact_owner_name,
       state,
       country,
       postal_code_id,
       postal_code,
       region,
       regional_business_lead, 
       global_managing_director,
       global_manager_sales,
       website_url,
       phone_number,
       mobile_number,
       dqs_contact_source,
       contact_owner,
       lead_created_date,
       contact_owner,
       remarks,
       lead_validate_stage,
       validated_by,
       lead_validated_date,
       lead_validate_remarks,
       assigned_by,
       assigned_date,
       lead_assgn_contact_owner,
       stage,
       lead_assign_remark, 
       industry_sector,
       customer_category,
       employee_count,
       company_remarks,
       gst_applicable,
       gst_number,
       pan_number,
       tan_number,
       phone_code,
       mobile_code,
       status,
       CorporateGroupBusinessRelationId,
       IndustryCodeId,
       CustomerServicePersonId,
       RelationTypeId,
       IsMainLocation,
       LocationTypeId
     }); 
     
     // let certificate_data= response.certificate_type==3? 4 : 3

     var responsedata = await lead_managment.update({
       lead_parent_generation_id: response.lead_genration_id,
       // certificate_type:certificate_data
     }, {  where: { lead_genration_id:  response.lead_genration_id}}); 

     return res.status(200).send({
       code: 200,
       message: "Successfully Lead Conversion Created",
       res: responsedata,
   });
 }
 
}

catch (error) {
 console.log(error);
 return res.status(500).send({ code: 500, message: "Server Error" });
};  
}




// localhost:5000/api/v1/lead_childsitewithparentbrandcertificate
payload={
    "ParentBusinessRelationId": "50000004",
    "certificate_type": 4,
    "lead_parent_generation_id": 144
}

exports.lead_Billing_Site = async (req, res) => {
    try {
      const ParentBusinessRelationId = req.body.ParentBusinessRelationId;
      const certificate_type = req.body.certificate_type
      const lead_parent_generation_id = req.body.lead_parent_generation_id
      console.log(ParentBusinessRelationId, "ParentBusinessRelationId");
  
      const mainLocation = await lead_managment.findOne({
        where: {
          br_number: ParentBusinessRelationId,
          IsMainLocation: 1,
          certificate_type:certificate_type
        }
      });
  
      const secondaryLocations = await lead_managment.findAll({
        where: {
          ParentBusinessRelationId: ParentBusinessRelationId,
          IsMainLocation: 0,
          // certificate_type:certificate_type,
          lead_parent_generation_id:lead_parent_generation_id
          // certificate_type: {
          //   [Op.ne]: certificate_type // Use Op.ne (not equal) to find records where certificate_type is not equal to the specified value
          // }
        }
      });
  
      // Conditionally add the main location to the array if it exists
      const allLocations = mainLocation ? [mainLocation, ...secondaryLocations] : secondaryLocations;
  
      console.log(allLocations, "Combined Location Data");
  
      if (allLocations.length > 0) {
        return res.status(200).send({ code: 200, message: "Fetch All Data Successfully!", data: allLocations });
      } else {
        return res.status(404).send({ code: 404, message: "Record Not Found" });
      }
    } catch (error) {
      console.error(error); // Adjusted for a potentially more appropriate logging mechanism
      return res.status(500).send({ code: 500, message: "Server Error" });
    }
  };


