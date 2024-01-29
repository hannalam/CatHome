import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchScreen from "./SearchScreen"; // Adjust the import path as needed

// Mock your API functions (if needed) or import actual implementations
jest.mock("../../data/MockDataAPI", () => ({
  getCatInfoByCatInfoName: jest.fn(),
  getCatInfoByCatTypeName: jest.fn(),
  getCatTypeName: jest.fn(),
}));

// Define a test case for the SearchScreen component
describe("SearchScreen", () => {
  it("renders the component correctly", () => {
    const { getByPlaceholderText, getByTestId } = render(<SearchScreen />);
    
    // Check if the search input is rendered
    const searchInput = getByPlaceholderText("cat type or cat name");
    expect(searchInput).toBeTruthy();
    
    // Check if the result container is initially empty
    const resultContainer = getByTestId("result-container");
    expect(resultContainer.children).toHaveLength(0);
  });

  it("updates search results on input change", async () => {
    // Mock API functions to return test data
    const mockCatInfo = [
      {
        catId: 1,
        title: "Cookie",
        photo_url: "https://static.wixstatic.com/media/cba985_5ffcafe374374c798728c80e66dc7dd4~mv2.jpg/v1/crop/x_1165,y_983,w_2132,h_2476/fill/w_392,h_455,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/IMGL4178%202.jpg",
        catTypeId: 1,
      },
      
    ];

    jest.mock("../../data/MockDataAPI", () => ({
      getCatInfoByCatInfoName: jest.fn().mockReturnValue(mockCatInfo),
      getCatInfoByCatTypeName: jest.fn().mockReturnValue(mockCatInfo),
      getCatTypeName: jest.fn(),
    }));

    const { getByPlaceholderText, getByTestId, findByText } = render(<SearchScreen />);
    
    // Simulate user input in the search field
    const searchInput = getByPlaceholderText("cat type or cat name");
    fireEvent.changeText(searchInput, "Cat");
    
    // Wait for the search results to update (asynchronously)
    const catItem = await findByText("Cat 1");
    
    // Check if the rendered cat item is in the search results
    expect(catItem).toBeTruthy();
  });
});
