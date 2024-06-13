const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/contact",
      contacts: [],
      slug: "OmarHG098",
    },

    actions: {
      createAgenda: async () => {
        const store = getStore();
        try {
          const response = await fetch(
            `${store.apiUrl}/agendas/${store.slug}`,
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
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(`${store.apiUrl}/agendas/${store.slug}`);
          if (response.status === 404) {
            actions.createAgenda();
            return;
          } else if (!response.ok) {
            throw new Error("No se pudo obtener la agenda");
          }
          const data = await response.json();
          console.log(data);
          setStore({ contacts: data.contacts });
        } catch (error) {
          console.log(error);
        }
      },

      // getContact: async () => {
      //   const store = getStore();
      //   try {
      //     const response = await fetch(`${store.apiUrl}/agendas/${store.slug}`);
      //     if (!response.ok) {
      //       throw new Error("No se ha podido obtener el contacto");
      //     }
      //     1;
      //     const data = await response.json();
      //     setStore({ contacts: data });
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      createContact: async (contacts) => {
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch(
            `${store.apiUrl}/agendas/${store.slug}/contacts`,
            {
              method: "POST",
              body: JSON.stringify({
                ...contacts,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setStore({ contacts: [...store.contacts, data] });
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      },
      
      deleteContact: async (id) => {
        try {
          const store = getStore();
          const response = await fetch(
            `${store.apiUrl}/agendas/${store.slug}/contacts/${id}`,
            {
              method: "DELETE",
            });
            if (!response.ok) {
              alert("No se puede borrar :(");
              throw new Error("No se pudo borrar :(");
            } else {
              const filteredContacts = store.contacts.filter((contact) => contact.id !== id);
              setStore({ contacts: filteredContacts });
            }
        } catch (error) {
          console.log(error);
        }
      },

      editContact: async (id, contact) =>{
        const store = getStore();
        const actions = getActions();
        try {
          const response = await fetch (`${store.apiUrl}/agendas/${store.slug}/contacts/${id}`,
            {
              method: "PUT",
              body: JSON.stringify(contact),
              headers: {
                "Content-type": "application/json",
              }
            });
            const data = await response.json();
            if (response.ok) {
              actions.getAgenda();
              setStore({ contacts: [...store.contacts, data] });
            }  
        } catch (error) {
          console.log(error);          
        }
      }
    },

  };
};

export default getState;
