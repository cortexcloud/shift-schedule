import { LitElement, PropertyValueMap, TemplateResult } from 'lit';
import '@cortex-ui/core/cx/c-box';
import '@cortex-ui/core/cx/modal';
import '@cortex-ui/core/cx/theme';
import '@cortex-ui/core/cx/icon';
import '@cortex-ui/core/cx/button';
import '@cortex-ui/core/cx/datepicker';
import '@cortex-ui/core/cx/popover';
import './components/request-button';
import { DateBetweenData, DayPart, RequestType, ScheduleDataWithRender, SchedulePractitionerRequestEntity, SchedulingData, SrShiftPlan, SchedulePractitionerEntity, ScheduleShiftsEntity, DatePickerRequest, DisabledDate, DateObject as HolidayObject, ScheduleErrorDayRequest } from './schedule.types';
import { ScheduleRequestDetailResponse, ScheduleRequestType } from './schedule-client.typess';
import '@lit-labs/virtualizer';
import 'dayjs/locale/th';
export declare class ShiftSchedule extends LitElement {
    private iconTitle;
    currentTime: Date;
    viewerRole: 'manager' | 'staff';
    timePeriod: 'early' | 'late';
    shiftSlot: {
        id: string;
        name: string;
    }[];
    private shiftSlotSort;
    mode: 'view' | 'edit';
    disableDates: DisabledDate[];
    practitionerId?: string;
    userHoverIndex: number;
    userSelectedIndex: number;
    scheduleData?: SchedulingData | ScheduleRequestDetailResponse | null;
    private removeOriginCache;
    requestTypes?: RequestType[] | ScheduleRequestType[];
    dateBetween?: DateBetweenData[];
    holidays: HolidayObject[];
    errorDayRequest: ScheduleErrorDayRequest[];
    requestSelected?: RequestType;
    selectedDate?: Date;
    srState: never[];
    maxWeekOFf: number;
    maxHeightOfUserTable?: number;
    private shiftSrRequestCache;
    private shiftSrShipCache;
    private shiftDatepickerCache;
    userImgDefault?: string;
    shiftSrRequestSaved: {
        [id: string]: {
            practitioner: SchedulePractitionerEntity;
            request: {
                [date: string]: {
                    shiftPlan: SrShiftPlan;
                };
            };
        };
    };
    shiftSemRequestSaved: DatePickerRequest;
    shiftOffRequestSaved: DatePickerRequest;
    shiftVacRequestSaved: DatePickerRequest;
    shiftWoffRequestSaved: {
        [id: string]: {
            practitioner: SchedulePractitionerEntity;
            request: {
                [date: string]: {
                    date: Date;
                };
            };
        };
    };
    maxHeight?: string;
    datepickerData?: CXDatePicker.SelectDate.Range['detail'];
    private removeRequestSelected?;
    tableWrapperRef: import("lit-html/directives/ref").Ref<HTMLDivElement>;
    dividerRef: import("lit-html/directives/ref").Ref<HTMLDivElement>;
    remarkRef: import("lit-html/directives/ref").Ref<HTMLInputElement>;
    private currentPopoverRef?;
    protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    renderRequestButton(): TemplateResult<1>;
    selectRequest(type: RequestType): void;
    private disableDateArranged;
    connectedCallback(): Promise<void>;
    private setRemoveMode;
    private holidayWithKeyMap;
    isRemoveMode: boolean;
    dividerTop: number;
    private monthTitleNav?;
    shouldArrowLeftDisable?: boolean;
    shouldArrowRightDisable?: boolean;
    currentMonthTitleDisplay?: string;
    startFocusWithViewMode: boolean;
    render(): TemplateResult<1>;
    managerHoverUser(indexUser: number, e: MouseEvent, practitioner: SchedulePractitionerEntity): void;
    sentRemoveEvent(): void;
    removeWoffSaved(dateString?: string, practitioner?: SchedulePractitionerEntity, data?: {
        initial: boolean;
    }): void;
    renderWoffSaved(dateString?: string, practitioner?: SchedulePractitionerEntity, data?: {
        initial: boolean;
    }, type?: RequestType['abbr'], date?: Date, indexUser?: number): TemplateResult<1>;
    renderWoffSavedHost(dateString?: string, practitioner?: SchedulePractitionerEntity, data?: {
        initial: boolean;
    }, type?: RequestType['abbr'], date?: Date, indexUser?: number): TemplateResult;
    removeSrPlan(dateString: string, practitioner: SchedulePractitionerEntity, removeMode?: boolean): void;
    renderSrSavedHost(dateString: string, practitioner: SchedulePractitionerEntity, planEntries: [string, Record<number, ScheduleShiftsEntity>][]): TemplateResult<1>;
    renderSrShiftSaved(planRequest: {
        practitioner: SchedulePractitionerEntity;
        request: {
            [date: string]: {
                shiftPlan: SrShiftPlan;
            };
        };
    }, dateString: string, practitioner: SchedulePractitionerEntity, indexUser: number): TemplateResult<1>;
    removeShiftDatePicker(data: {
        dateString?: string;
        remark?: string;
        initial?: boolean;
    }, type: RequestType['abbr'], practitioner: SchedulePractitionerEntity): void;
    findRequestType(abbr: string): RequestType;
    renderDayOffHost(data: {
        dateString?: string;
        remark?: string;
        initial?: boolean;
    }, type: RequestType['abbr'], practitioner: SchedulePractitionerEntity): TemplateResult<1>;
    renderDayOffPlanSaved(data: {
        dateString?: string;
        remark?: string;
        initial?: boolean;
    }, type: RequestType['abbr'], practitioner: SchedulePractitionerEntity, date: Date, indexUser: number, cancel?: string): TemplateResult<1>;
    removeInitialSr(practitioner: SchedulePractitionerEntity, dateString: string): void;
    goToMonth(type: 'next' | 'previous'): void;
    renderSrInitialHost(request: ScheduleDataWithRender, practitioner: SchedulePractitionerEntity, dateString: string): TemplateResult<1>;
    renderInitialRequest(request: ScheduleDataWithRender, practitioner: SchedulePractitionerEntity, date: Date, indexUser: number): TemplateResult<1> | undefined;
    private generateDayOffValue?;
    saveDatepicker(e: CXDatePicker.SelectDate.Range, practitioner: SchedulePractitionerEntity): void;
    removeInitialSameData(practitioner: SchedulePractitionerEntity, practitionerId: string, dateString?: string): void;
    deleteInitialDatePicker(practitioner: SchedulePractitionerEntity, practitionerId: string, dateBetween: Date[], dateString?: string): void;
    getPopoverByRequest(data: {
        date: Date;
        practitioner: SchedulePractitionerEntity;
        request?: SrShiftPlan;
        cellId?: string;
        dateString?: string;
        type?: RequestType['abbr'];
        title?: string;
        remark?: string;
        indexUser?: number;
        event?: PointerEvent;
    }): TemplateResult<1> | undefined;
    saveShiftPlanDatePickerDisabledButton: boolean;
    saveShiftPlanDatePicker: (practitioner: SchedulePractitionerEntity, dateString: string, ceillId: string, remark: string, type: RequestType['abbr']) => void;
    filterDateDataDisabled(dateData: {
        [key: string]: any;
    }, disabledDate: string[]): {
        [key: string]: any;
    };
    filterDateDataUse(dateData: {
        [key: string]: any;
    }, usedDate: string[]): {
        [key: string]: any;
    };
    renderDatepickerBox(data: {
        title: string;
        practitioner: SchedulePractitionerEntity;
        date: Date;
        cellId: string;
        dateString: string;
        remark: string;
        type: RequestType['abbr'];
        indexUser: number;
        request?: SrShiftPlan;
        event?: PointerEvent;
    }): TemplateResult<1>;
    private remarkCache;
    shakePopover(): void;
    appendPopover(type: RequestType['abbr'], cellId: string, data: {
        date: Date;
        practitioner: SchedulePractitionerEntity;
        dateString: string;
        indexUser: number;
    }, popoverContent: TemplateResult, popoverHost: TemplateResult): void;
    renderEmptyDateForSelect(date: Date, practitioner: SchedulePractitionerEntity, dateString: string, indexUser: number, request?: SrShiftPlan): TemplateResult<1> | undefined;
    renderShipSrRequest(shifts: ScheduleShiftsEntity[], dayPart: DayPart, dateString: string, practitioner: SchedulePractitionerEntity, initialSr?: Record<string, ScheduleShiftsEntity>): TemplateResult<1> | undefined;
    addSrShiftRequest(requestPlan: ScheduleShiftsEntity, dateString: string): void;
    groupShiftsByLetter(arr: any): any;
    renderContentBack(type: RequestType['abbr'], date: Date, dateString: string, practitioner: SchedulePractitionerEntity, boxTarget: HTMLElement, indexUser?: number, renderType?: 'init' | 'saved', request?: SrShiftPlan): void;
    renderSrPopover(date: Date, practitioner: SchedulePractitionerEntity, request?: SrShiftPlan, cellId?: string, indexUser?: number, event?: PointerEvent): TemplateResult<1>;
    saveSrRequestPlanDisabled: boolean;
    saveSrRequestPlan(date: Date, practitioner: SchedulePractitionerEntity, cellId?: string, indexUser?: number): void;
    closePopover(): void;
    selectDateRequest(date: Date, type?: RequestType['abbr'], practitioner?: SchedulePractitionerEntity, dateString?: string): void;
    saveWoffRequest(date: Date, practitioner: SchedulePractitionerEntity, dateString: string): void;
    renderEmptyBox(date: Date, state?: 'display' | 'select', type?: RequestType['abbr'], practitioner?: SchedulePractitionerEntity, dateString?: string, indexUser?: number): TemplateResult<1>;
    countSameDates(dateA: string[], dateB: string[]): number;
    resetRequestSelect(): void;
    findDuplicationDate: (arrayDate1: (string | Date)[], arrayDate2: (string | Date)[]) => string[];
    convertRequestDatesToObject(requests: SchedulePractitionerRequestEntity[]): {
        [key: string]: ScheduleDataWithRender;
    };
    earlyColor(requestTime: DayPart): "color-12-100" | "color-4-100" | "color-7-100";
    lateColor(requestTime: DayPart): "color-12-100" | "color-4-100" | "color-7-100";
    setColorRequestType(requestTime: DayPart): string;
    convertDateToString(date: Date): string;
    private moveUserToFirstArray;
    private shouldNotAllowedWeekOffSelect?;
    private scrollValueFirstDateMonth?;
    isSameMonth(date1: string, date2: string): boolean;
    shouldScrollErrorTarget: boolean;
    initialScroll: boolean;
    firstTableUpdated: boolean;
    updated(changedProp: Map<string, unknown>): void;
    private updateTable;
    private setVacDayOff;
    private maxDayOffLength;
    private vacDayOff;
    private currentScrollX;
    getDateDisabled(holidays: any, startDate: any, endDate: any): {};
    dateRangeIntersect(startDate: Date, endDate: Date, dateSameCheck: string[]): string[];
    formatDate(date: Date): string;
    generateDayOff(startDate: Date, endDate: Date, dayOffExist: string[], dayOff: number, disabledDate?: string[], initialDate?: string[]): string[];
    getHolidayObject(inputArray: HolidayObject[]): {
        [key: string]: HolidayObject;
    };
    increaseDate(days: number, date: Date): Date;
    getDateBetween(startDate: Date, endDate: Date): DateBetweenData[];
    reduceDate: (date: Date, n: number) => Date;
    daysBetween: (startDate: Date, endDate: Date) => number;
    createRenderRoot(): this;
    disconnectedCallback(): void;
}
declare global {
    namespace CXShiftSchedule {
        type Ref = ShiftSchedule;
    }
}
