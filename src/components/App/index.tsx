import * as React from 'react';
import * as styles from './App.scss';

interface Props {
    message: string;
}

class App extends React.Component<Props, {}> {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.message}>{this.props.message}</h2>
            </div>
        );
    }
}

export default App;
