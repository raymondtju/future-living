import { create } from "zustand";

interface IPropertyDataStore {
  propertyData: any[];
  propertyDetail: any;
  fetchPropertyData: (id?: string) => void;
  fetchPropertyDetail: (id: string) => void;
}

const usePropertyDataStore = create<IPropertyDataStore>((set) => ({
  propertyData: [],
  propertyDetail: null,
  fetchPropertyData: async (id) => {
    const res = await fetch("http://localhost:3000/api/detail", {
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
    await fetch(`http://localhost:3000/api/detail/?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => set({ propertyDetail: data.data }));
  },
}));

export default usePropertyDataStore;
