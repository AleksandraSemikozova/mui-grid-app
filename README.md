# MUI data-grid app

[Deloyed to Netlify](https://mui-grid-app.netlify.app/)

Getting Started with Create React App - [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Notes

- styles were implemented globally to safe my time, but sure thing we have to keep them inside of the components and use for example mui `styled` utility;
- faced with bug of using `position: fixed` inside `DataGrid`, so redefined `.MuiDataGrid-virtualScrollerRenderZone` globally;
- another point for improve - don't create separate instance of lightbox for each column and create a common `Provider` instead;
- themes could be easily cheched and managed inside of the components via `theme.palette.mode` prop;
- didn't found quick solution for minmax height of Cell.
