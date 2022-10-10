import { createSlice, configureStore } from "@reduxjs/toolkit";

const Settings = createSlice({
    name: 'settings',
    initialState: {
        widgets: {
            marquee: true,
            calendar: true,
            confirmed: true,
            deaths: true,
            recovered: true,
            bar_chart: true,
            pie_chart: true,
            countries: true
        }
    },
    reducers: {
        widgetsSettings(state, action){
            const data = action.payload;
            
            state.widgets.marquee = data.marquee;
            state.widgets.calendar = data.calendar;
            state.widgets.confirmed = data.confirmed;
            state.widgets.deaths = data.deaths;
            state.widgets.recovered = data.recovered;
            state.widgets.bar_chart = data.bar_chart;
            state.widgets.pie_chart = data.pie_chart;
            state.widgets.countries = data.countries;
        }
    }
});

const store = configureStore({
    reducer : {
        settings: Settings.reducer,
    }
});

export const SettingsActions = Settings.actions;

export default store;