// src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

// Initial state for the widgets
const initialWidgetState = {
    customers: { count: 3781, increase: "+11.01%", increment: true },
    orders: { count: 1219, increase: "-0.03%", increment: false },
    revenue: { count: "$695", increase: "+15.03%", increment: true },
    growth: { count: "30.1%", increase: "+6.08%", increment: true },
};

// Widget reducer
const widgetReducer = (state = initialWidgetState, action) => {
    switch (action.type) {
        case 'UPDATE_WIDGET':
            return {
                ...state,
                [action.payload.type]: { ...state[action.payload.type], ...action.payload.data },
            };
        default:
            return state;
    }
};

// Initial state for the bar chart
const initialBarState = {
    actualValues: [22, 27, 23, 29, 18, 25],
    thresholds: [18, 22, 19, 23, 15, 21],
};
const initialLineChartState = {
    currentWeekData: [15, 9, 12, 18, 22, 21],
    previousWeekData: [10, 18, 15, 12, 16, 25],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
};
const initialLocationState = {
    locations: [
        { name: "New York", latLng: [40.7128, -74.0060], revenue: 72 },
        { name: "San Francisco", latLng: [37.7749, -122.4194], revenue: 39 },
        { name: "Sydney", latLng: [-33.8688, 151.2093], revenue: 25 },
        { name: "Singapore", latLng: [1.3521, 103.8198], revenue: 61 },
    ],
};
// Action type for setting chart data
const SET_CHART_DATA = 'SET_CHART_DATA';

// Action creator for setting chart data
export const setChartData = (data) => ({
    type: SET_CHART_DATA,
    payload: data,
});

// Bar chart reducer
const barchartReducer = (state = initialBarState, action) => {
    switch (action.type) {
        case SET_CHART_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
const SET_LINE_CHART_DATA = 'SET_LINE_CHART_DATA';

// Action creator for setting line chart data
export const setLineChartData = (data) => ({
    type: SET_LINE_CHART_DATA,
    payload: data,
});

// Line chart reducer
const lineChartReducer = (state = initialLineChartState, action) => {
    switch (action.type) {
        case SET_LINE_CHART_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const SET_LOCATIONS = 'SET_LOCATIONS';

// Action creator for setting location data
export const setLocations = (locations) => ({
    type: SET_LOCATIONS,
    payload: locations,
});

const locationReducer = (state = initialLocationState, action) => {
    switch (action.type) {
        case SET_LOCATIONS:
            return { ...state, locations: action.payload };
        default:
            return state;
    }
};
const initialProductState = {
    products: [
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, total: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, total: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, total: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, total: 3680.00 },
        { name: 'Marco Shoes', price: 79.49, quantity: 64, total: 1965.81 },
    ],
};

// Action type
const SET_PRODUCTS = 'SET_PRODUCTS';

// Action creator for setting product data
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
});

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

const initialRingChartState = {
    data: [
        { name: 'Direct', value: 300.56, color: '#000000' }, 
        { name: 'Affiliate', value: 135.18, color: '#baedbd' },
        { name: 'Sponsored', value: 154.02, color: '#95a4fc' },
        { name: 'E-mail', value: 48.96, color: '#b1e3ff' },
    ],
};
const SET_RING_CHART_DATA = 'SET_RING_CHART_DATA';

// Action creator for setting ring chart data
export const setRingChartData = (data) => ({
    type: SET_RING_CHART_DATA,
    payload: data,
});

// Ring chart reducer
const ringChartReducer = (state = initialRingChartState, action) => {
    switch (action.type) {
        case SET_RING_CHART_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    widgets: widgetReducer,
    barcharts: barchartReducer,
    linecharts:lineChartReducer,
    locations:locationReducer,
    products:productReducer,
    ringchart:ringChartReducer,
});

// Create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
