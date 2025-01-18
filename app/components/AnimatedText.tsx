import React from 'react';
import styles from '../styles/AnimatedText.module.css';

const AnimatedText: React.FC = () => {
    return (
        <section id="animatedText">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div role="button" className={styles.animatedTextCard}>
                            <span className="glow"></span>
                            <div>
                                Cristel Darré <span> developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnimatedText;
