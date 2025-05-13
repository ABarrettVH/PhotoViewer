import React, { useReducer } from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { getImageUrls, ImageSelector } from './PhotoViewer/ImageSelector';
import renderer from 'react-test-renderer';

test('renders the title- React Photo Viewer', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeVisible();
});

test('Renders an image given a url', () => {
  const { getByAltText } = render(<PhotoViewer srcUrl='https://picsum.photos/id/600/1600/900.jpg' />);
  
  const imgElement = getByAltText(/dynamic top image/i);
  expect(imgElement).toBeVisible();
});

test('Check urls array doesnt contain broken images', () => {
  const imageUrls = getImageUrls();
  
  const brokenImage = !imageUrls.includes('https://picsum.photos/id/601/400/300.jpg');

  expect(brokenImage).toBeTruthy();
});


test('Check first picture is as expected', () => {
  const imageUrls = getImageUrls();
  
  const firstImage = imageUrls[0];

  expect(firstImage).toBe('https://picsum.photos/id/600/400/300.jpg');
});


describe("App", () => {
 it("Should match snapshot", () => {

 const tree = render(<App/>);

 expect(tree).toMatchSnapshot();
 });
});



describe("My Component", () => {

  it('renders correctly', async () => {
  const {getAllByAltText} = render(<App/>);

  const topImages = getAllByAltText('dynamic top image'); 
  const topImage = topImages[0] as HTMLImageElement;
  const galleryPictures = getAllByAltText('button');
  const buttonToClick = galleryPictures[4] as HTMLImageElement;
  
  expect(topImage.src).toBe("https://picsum.photos/id/600/1600/900.jpg")

  await fireEvent.click(buttonToClick);

  expect(topImage.src).toBe("https://picsum.photos/id/605/400/300.jpg");

})
})



