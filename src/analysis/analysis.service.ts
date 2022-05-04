// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { AnalyzeInput, AnalyzeResult } from "./parameter.interface";

/**
 * Service Methods
 */
export const run = async (contractCode: string): Promise<AnalyzeResult> => {
	// Parse import statements
	let imports = contractCode.match(/import[\ \t]+[\'\"]+([a-zA-Z_\-\.]+)[\'\"]+/g);
	let importStatements: string[] = [];
	if (imports != null) {
		imports.forEach(elem => {
			elem = elem.replace("import ", "");
			elem = elem.replace(/[\"\']+/g, "");
			importStatements.push(elem);
		});
	}
	// Parse contract statements
	let contracts = contractCode.match(/contract[\ \t]+[a-zA-Z_\-\.]+/g);
	let contractStatements: string[] = [];
	if (contracts != null) {
		contracts.forEach(elem => {
			elem = elem.replace("contract ", "");
			contractStatements.push(elem);
		});
	}

	return {
	    imports: importStatements,
	    contracts: contractStatements
	};
};

