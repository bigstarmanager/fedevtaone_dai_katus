npm i
npm run dev

In Postman
	Select request type to POST,  
	Set URL to "http://localhost:3001/analysis"
	For parameter for request, select Body/Raw/ and fill textbox following text:
	{
	    "code": "import \"VarysContractBase.sol\"; import \"VarysContractExtras.sol\"; contract VarysContract {  mapping (uint => address) public addresses; }"
	}
	Press Send button
You can see the result:
{
    "imports": [
        "VarysContractBase.sol",
        "VarysContractExtras.sol"
    ],
    "contracts": [
        "VarysContract"
    ]
}