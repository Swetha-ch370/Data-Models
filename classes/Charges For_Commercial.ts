class Charges
{
    Name : string  //G.Ramanand,AY977
    PlotUsed_For : string  // "ShopNumber 24",AZ977
    Receipt_Number : string  //QR4629,BA977
    Date : Date  //09-12-2022,BB977
	Rent : number  //4485,BC977
	GST : number  //807,BD977
	TDS : number  //0,BE977
	Other_Charges : number //0,BF977
    totalRent=function() :number{

        return this.Rent + this.GST +this.Other_Charges -this. TDS

    }
    // Total : 5292,BG977 (Rent + GST - TDS + Other_Charges)
    constructor()
    {
        
    }
}

 
		
		
		
