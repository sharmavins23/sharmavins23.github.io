// Imports
import React from "react";
import { Typography, Divider } from "antd";
const { Title } = Typography;
// Styles
import styles from "../src/stylesheet.module.css";
import {} from "antd/dist/antd.css";

// Header area container
function Header() {
    // Render
    return (
        <div>
            <Divider />
            <div class={styles.header_name}>
                <Title>Vins Sharma</Title>
            </div>
            <Divider />
        </div>
    );
}

// Module export
export default Header;
