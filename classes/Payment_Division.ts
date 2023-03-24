class paymentDivision
{
    ReceiptsBy_Cash : number  //" " ,BC950
	ReceiptsBy_Onine : number  //" "   ,BC951
	ReceiptsBy_noBrokerhood : number  //" ",BC952
    Total=function() :number{

         return this.ReceiptsBy_Cash + this.ReceiptsBy_Onine +this.ReceiptsBy_noBrokerhood;

    }
    constructor()
    {

    }
}