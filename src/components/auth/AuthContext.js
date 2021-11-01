import { createContext } from 'react';

// set auth context
const AuthContext = createContext(null)

export default AuthContext;

// // hook for authorization
// export function useAuth() {
//     return useContext(AuthContext)
// }
