class billTracking
{
    extra_floor:number =50
    sNumber : number  //1, B9
	Type : string  //(resedential/commercial/vacant plots)
	Name : string //"Prabhakar Reddy", C9
	GHMC_PTIN : string  //"NO PTIN",D9
	Plot_Number : number  //1,E9
	Ground_Floor : string  //"G+",F9
	Maintenance_Rate : number  //50,G9
	Security_Rate : number  //150,H9
	No_of_Floors : number  //3,I9
    Maintenance_Rate1=function() :number{  // 50, (extra_floor*No.of_Floors ),J9

        return this.extra_floor * this.No_of_Floors 

    }
	Security_Rate1=function() :number{  // 150, (extra_floor*No.of_Floors ),J9

        return this.extra_floor * this.No_of_Floors 

    }
	Tarrif_Category : string  //'E',L9
	Eligible_Units : number  //52,M9
	ADF_Status : string  //"adf paid",N9
	Uploaded_In_HMV : string  //"yes",O9
	Water_For20KL : number  //270,P9
	Water_UnderADF : number  //30,Q9
	Maintenance_UnderADF : number  //50,R9
	Security_UnderADF : number  //150,S9
	TotalUnits_ConsumedInMonth : number  //31,T9
	Water_Arrears : number  //873,U9
	Maintenance_Arrears : number  //200,V9
	Security_Arrears : number  //300,W9
	AsPer_Tarrif = function() :number{  //816,X9 (TotalUnits_Consumed*16)

        return this.TotalUnits_ConsumedInMonth * 16 

    }  
	Cess : number  //120,Y9
	Water_Demand : number  //936,Z9
	 
    Maintenance_Demand  = function() :number{ //50,AA9 (Maintenance_Rate+Maintenance_Rate1)

        return this.Maintenance_Rate + this.Maintenance_Rate1 

    }  
 
    Security_Demand = function() :number{   //300,AB9 (Security_Rate1+Security_Rate)
        return this.Maintenance_Rate + this.Maintenance_Rate1 

    } 
    TotalReceivable_Water= function() :number{   //320,AC13 (Water_Arrears+Water_Demand)
        return this.Water_Arrears + this.Water_Demand 

    } 
	TotalReceivable_Maintenance= function() :number{   //100,AD9 (Maintenance_Arrears+Maintenance_Demand)
        return this.Maintenance_Arrears + this.Maintenance_Demand 

    } 
	TotalReceivable_Security= function() :number{   //200,AE9 (Security_Arrears+Security_Demand)
        return this.Security_Arrears + this.Security_Demand 

    } 
    Total= function() :number{   //2659,AF9 (TotalReceivable_Water+TotalReceivable_Maintenance+TotalReceivable_Security) 
        return this.TotalReceivable_Water + this.TotalReceivable_Maintenance + this.TotalReceivable_Security

    } 
	WaterFor20kl_DeductionFor_Dec22 : number  //270,AG13
	WaterUnderADF_DeductionFor_Dec22 : number  //30,AH13
	MaintenanceUnderADF_DeductionFor_Dec22 : number //50,AI9
	SecurityUnderADF_DeductionFor_Dec22 : number //150,AJ9
	
    WaterNet_Receivable= function() :number{   //20,AK13 (TotalReceivable_Water - WaterFor20kl_DeductionFor_Dec22 - WaterUnderADF_DeductionFor_Dec22)
        
        return this.TotalReceivable_Water - this.WaterFor20kl_DeductionFor_Dec22 - this.WaterUnderADF_DeductionFor_Dec22
    } 
    MaintenanceNet_Receivable= function() :number{  //50,AL13 (TotalReceivable_Maintenance - MaintenanceUnderADF_DeductionFor_Dec22)
        
        return this.TotalReceivable_Maintenance - this.MaintenanceUnderADF_DeductionFor_Dec22
    } 
    SecurityNet_Receivable= function() :number{	  //50,AM13 (Total_Receivable_Security - SecurityUnderADF_DeductionFor_Dec22)

        
        return this.TotalReceivable_Security - this.Security_DeductionFor_Dec22
    } 
    TotalNet_Receivable= function() :number{	//120,AN13   (WaterNet_Receivable + SecurityNet_Receivable + SecurityNet_Receivable)

        
        return this.WaterNet_Receivable + this.SecurityNet_Receivable + this.SecurityNet_Receivable
    } 
	ReceiptNumber_CollectionReceived : number  //2500,A013
	ReceivedOn_CollectionReceived : Date  //"21-12-2022",AP13
	Water_CollectionReceived : number  //20,AQ13
	Maintenance_CollectionReceived : number //50,AR13
	Security_CollectionReceived : number  //50,AS13
    Water_ClosingBalance= function() :number{	 //0,AT13 (TotalReceivable_Water - WaterFor20kl_DeductionFor_Dec22 - WaterUnderADF_DeductionFor_Dec22 - Water_CollectionReceived)

        
        return this.TotalReceivable_Water - this.WaterFor20kl_DeductionFor_Dec22 - this.WaterUnderADF_DeductionFor_Dec22 - this.Water_CollectionReceived
    } 
    Maintenance_ClosingBalance= function() :number{	 //0,AU13 (TotalReceivable_Maintenance - MaintenanceUnderADF_DeductionFor_Dec22 - Maintenance_CollectionReceived)

        
        return this.TotalReceivable_Maintenance - this.MaintenanceUnderADF_DeductionFor_Dec22 - this.Maintenance_CollectionReceived
    } 
    Security_ClosingBalance= function() :number{	//0,AV13 (TotalReceivable_Security - SecurityUnderADF_DeductionFor_Dec22 - Security_CollectionReceived)

        
        return this.TotalReceivable_Security - this.SecurityUnderADF_DeductionFor_Dec22 - this.Security_CollectionReceived
    } 
	InterestFor_Delay :number  //5,AW64

    constructor()
    {
        
    }
}