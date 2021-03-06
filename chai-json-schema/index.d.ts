// Type definitions for chai-json-schema 1.4
// Project: https://github.com/chaijs/chai-json-schema/
// Definitions by: Ulrich Heiniger <https://github.com/ulrichheiniger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// <reference types="node"/>
// <reference types="chai" />

declare namespace Chai {
	export interface Assert {
		jsonSchema(value: any, schema: any, msg?: string): void;
		notJsonSchema(value: any, schema: any, msg?: string): void;
	}

	export interface LanguageChains {
		jsonSchema(schema: any, msg?: string): void;
	}
}

declare module "chai-json-schema" {
	function chaiJsonSchema(chai: any, utils: any): void;
    namespace chaiJsonSchema {}
	export = chaiJsonSchema;
}
