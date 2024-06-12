const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/contact/",
      contacts: [],
      agenda: {
        slug: "",
        contacts: [
          {
            name: "",
            phone: "",
            email: "",
            address: "",
            id: "",
          },
        ],
      },
    },
   
	
	actions: {

      createAgenda: async () => {
        try {
          const response = await fetch(
            store.apiUrl + `agendas/ ` + store.slug,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          if (!response.ok) {
            throw new Error("No se pudo crear el usaurio");
          }
          const data = await response.json();
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      },

      getAgenda: async () => {
        try {
          const response = await fetch(
            store.apiUrl + `agendas/ ` + store.agenda.slug
          );
          if (!response.ok) {
            throw new Error("No se pudo obtener la agenda");
          }
          const data = await response.json();
          console.log(data);
		  setStore({ agenda: data })
        } catch (error) {
          console.log(error);
        }
      },

      getContact: async () => {
        const store = getStore();
        try {
          const response = await fetch(store.apiUrl);
          if (!response.ok) {
            throw new Error("No se ha podido obtener el contactos");
          }
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
