export type drug = {
    productName: string;
    customColor?: string;
    done: boolean;
    usedAt?: string;
  };

  export type searchDrug = {
    PRDUCT?: string;
    SRV_USE?: string;
  }
  
export type drugList = drug[];
