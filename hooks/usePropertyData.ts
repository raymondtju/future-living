import { create } from "zustand";

interface IPropertyDataStore {
  propertyData: any[];
  propertyDetail: any;
  fetchPropertyData: (id?: string) => void;
  fetchPropertyDetail: (id: string) => void;
}

let url: string;
if (process.env.NODE_ENV == "development") {
  url = "http://localhost:3000";
} else {
  url = process.env.NEXT_PUBLIC_API as string;
}

const usePropertyDataStore = create<IPropertyDataStore>((set) => ({
  propertyData: [],
  propertyDetail: null,
  fetchPropertyData: async (id) => {
    const res = await fetch(`${url}/api/detail`, {
      method: "GET",
    });
    const data = await res.json();

    if (id) {
      const filtered = data.data.filter((obj: any) => obj.id != id);
      set({ propertyData: filtered });
    } else {
      set({ propertyData: data.data });
    }
  },
  fetchPropertyDetail: async (id) => {
    await fetch(`${url}/api/detail/?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => set({ propertyDetail: data.data }));
  },
}));

export default usePropertyDataStore;
