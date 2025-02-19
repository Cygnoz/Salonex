export interface GstDetails {
    taxType?: string;
    gstIn?: string;
    gstBusinessLegalName?: string;
    gstBusinessTradeName?: string;
    gstRegisteredDate?: string;
    compositionSchema?: boolean;
    reverseCharge?:boolean;
    importExport?: boolean;
    digitalServices?:boolean;
  }