import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from "react-toastify";
import i18n from "i18next";  // Importing i18n for translations


export const getNotifications = createAsyncThunk('other/getNotifications', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.NOTIFICATIONS}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const getNotificationCount = createAsyncThunk('other/getNotificationCount', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.NOTIFICATION_COUNT}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const houseSeller = createAsyncThunk('other/houseSeller', async (data, { rejectWithValue }) => {
    try {
        const response = await toast.promise(
            axios({
                url: API_ENDPOINTS.HOUSE_SELLER,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    huis: data.afkorting
                },
            }), {
            pending: i18n.t('Loading...'),
            error: {
                render({ data }) {
                    return data?.response?.data?.message || i18n.t('Failed!');
                }
            }
        }
        )
        if (response.data.error) {
            toast.error(i18n.t(response.data.error));
        } else {
            toast.success("Success");
        }
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const transferValue = createAsyncThunk('other/transferValue', async (data, { rejectWithValue }) => {
    try {
        const response = await toast.promise(
            axios({
                url: API_ENDPOINTS.TRANSFER_VALUE,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data
            }), {
            pending: i18n.t('Loading...'),
            success: {
                render({ data }) {
                    return data?.data?.message || i18n.t('Success!');
                }
            },
            error: {
                render({ data }) {
                    return (data?.response?.data?.message || data?.response?.data?.error) || i18n.t('Failed!');
                }
            }
        }
        )
        return response.data

    } catch (error) {
        // toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const getHouseSell = createAsyncThunk('other/getHouseSell', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.GET_HOUSE_SELLER}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const presentation = createAsyncThunk('other/presentation', async (data, { rejectWithValue }) => {
    try {

        const response = await toast.promise(
            axios({
                url: `${API_ENDPOINTS.UPDATE_PRESENTATION}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data:{
                    profiel:data
                }
            }), {
            pending: i18n.t('Loading...'),
            success: {
                render({ data }) {
                    return data?.data?.message || i18n.t('Success!');
                }
            },
            error: {
                render({ data }) {
                    return (data?.response?.data?.message || data?.response?.data?.error) || i18n.t('Failed!');
                }
            }
        }
        )
        return response.data

    } catch (error) {
        // toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const updateHonors = createAsyncThunk('other/updateHonors', async (id, { rejectWithValue }) => {
    try {

        const response = await toast.promise(
            axios({
                url: `${API_ENDPOINTS.UPDATE_HONORS}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data:{
                    user_id:id
                }
            }), {
            pending: i18n.t('Loading...'),
            success: {
                render({ data }) {
                    return data?.data?.message || i18n.t('Success!');
                }
            },
            error: {
                render({ data }) {
                    return (data?.response?.data?.message || data?.response?.data?.error) || i18n.t('Failed!');
                }
            }
        }
        )
        return response.data

    } catch (error) {
        // toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const getHonors = createAsyncThunk('other/getHonors', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
                url: `${API_ENDPOINTS.GET_HONORS}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});
export const getTravels = createAsyncThunk('other/getTravels', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
                url: `${API_ENDPOINTS.GET_TRAVEL}`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});



const initialState = {
    notifications: [],
    notification_count: 0,
    house_seller_data: [],
    presentation: {},
    honors:{}
}

export const otherSlice = createSlice({
    name: 'other',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotifications.pending, (state, action) => {
                state.notifications_loading = true;
                state.notifications_error = null;
            })
            .addCase(getNotifications.fulfilled, (state, action) => {
                state.notifications_loading = false;
                state.notifications = action.payload.data ? action.payload.data : []
            })
            .addCase(getNotifications.rejected, (state, action) => {
                state.notifications_loading = false;
                state.notifications_error = action.payload;
            })
            .addCase(getNotificationCount.fulfilled, (state, action) => {
                state.notification_count = action.payload.data ? action.payload.data.notification_count : 0
            })
            .addCase(houseSeller.pending, (state, action) => {
                state.house_seller_loading = true;
                state.house_seller_error = null;
            })
            .addCase(houseSeller.fulfilled, (state, action) => {
                state.house_seller_loading = false;
                state.house_seller = action.payload?.data ? action.payload.data : []
            })
            .addCase(houseSeller.rejected, (state, action) => {
                state.house_seller_loading = false;
                state.house_seller_error = action.payload;
            })
            .addCase(getHouseSell.pending, (state, action) => {
                state.house_seller_data_loading = true;
                state.house_seller_data_error = null;
            })
            .addCase(getHouseSell.fulfilled, (state, action) => {
                state.house_seller_data_loading = false;
                state.house_seller_data = action.payload?.houseDetaile ? action.payload.houseDetaile : []
            })
            .addCase(getHouseSell.rejected, (state, action) => {
                state.house_seller_data_loading = false;
                state.house_seller_data_error = action.payload;
            })
            .addCase(presentation.fulfilled, (state, action) => {
                state.presentation_loading = false;
                state.presentation = action.payload ? action.payload : []
            })
            .addCase(getHonors.fulfilled, (state, action) => {
                state.honors_loading = false;
                state.honors = action.payload ? action.payload : {}
            })
            .addCase(getTravels.fulfilled, (state, action) => {
                state.travelLoading = false;
                state.lravel_data = action.payload ? action.payload?.data : []
            })
    }
})

export default otherSlice.reducer