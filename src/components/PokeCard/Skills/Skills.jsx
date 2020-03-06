import React, { Component } from "react"
import styles from "../Skills";

export default class Skills extends Component {
    render() {
        return (
            <section className={styles.skills}>
                <div>
                    {Object.entries(this.props.skills).map((entry, index) => {
                        return (
                            <div key={index} className={styles.skillsWrapper}>
                                <div className={styles.skillsKey}>
                                    {entry[0]}
                                </div>
                                <div className={styles.skillsValue}>
                                    {entry[1]}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}