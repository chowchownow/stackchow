import create from 'zustand'

export const useStore = create(
       (set) => ({

              // cart
              cart : {
                     food : []
              },

              //add Foods in cart
              addFoods: (data)=> 
              set((state) => ({
                     cart: {
                            food: [...state.cart.food, data]
                     }
              })),


              // Remove foods
              removeFoods : (index)=>
              set((state)=> ({
                     cart : {
                            food : state.cart.food.filter((_ , i)=> i !=index)
                     }
              }))
       })
)