import { add } from "../../utils/StringUtil"
describe("String Calculator", () => {
    describe("validation of inputs with comma separated", () => {
        test("should return 0 for an empty string", () => {
            expect(add("")).toBe(0);
        })
        test("should return negative numbers not allowed when negative numbers passed", () => {
            expect(() => add("-1,-2,-3")).toThrowError(new Error(`negative numbers not allowed -1,-2,-3`));

        })
    })
    describe("processing of valid inputs with comma as delimiter", () => {
        test("shoud return the number itself when only one number is given", () => {
            //Given: input
            const input = "5";
            //When: alling add function
            const result = add(input);
            //Then: it should return same number
            expect(result).toBe(parseInt(input));
        })
        test("should return the sum of two comma-separated numbers", () => {
            //Given: two numbers separated by comma
            const input = "1,2";
            //When: calling the add function
            const result = add(input);
            //Then: it should return their correct sum
            expect(result).toBe(3);
        })
    })
    test("should handle multiple numbers", () => {
        //Given: multiple comma separate numbers
        const input = "1,2,3,4";
        //When: calling the add function
        const result = add(input);
        //Then: it should return their correct sum
        expect(result).toBe(10);
    })
    describe("should handle various delimiters", () => {
        test("should handle new lines along with comma as delimiters", () => {
            //Given: new line as delimiter between any numbers
            const input = "1\n2,3"
            //When: calling the add function
            const result = add(input);
            //Then: it should return their correct sum
            expect(result).toBe(6);

        })
        test("should support semi colon as delimiter when passed as //;\n", () => {
            //Given: semi colon line as delimiter between any numbers
            const input = "//;\n1;2;3"
            //When: calling the add function
            const result = add(input);
            //Then: it should return their correct sum
            expect(result).toBe(6);
        })
    })

})