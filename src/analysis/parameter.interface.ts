// src/analyze/analyze_reult.interface.ts

export interface AnalyzeInput {
    code: string;
}
export interface AnalyzeResult {
    imports: Array<string>;
    contracts: Array<string>
}
