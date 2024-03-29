import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/auth';

type Props = {
    children: React.ReactNode;
    path: string;
};

const PrivateRoute = ({ children, path }: Props) => {

    return (
        <Route
            path={path}
            render={() =>
                isAuthenticated() ? children : <Redirect to="/" />
            }
        />
    );
};

export default PrivateRoute;
