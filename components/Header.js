// Imports
import React from "react";
import { Typography, Divider } from "antd";
const { Title, Text } = Typography;
// Styles
import styles from "../src/stylesheet.module.css";
import {} from "antd/dist/antd.css";

// Header area container
function Header() {
    // Render
    return (
        <div>
            {/* Name */}
            <Divider />
            <div class={styles.header_name}>
                <Title>Vins Sharma</Title>
            </div>

            {/* Info */}
            <Divider />
            <table class={styles.header_table}>
                <tr>
                    {/* Left side */}
                    <td></td>

                    {/* Right side */}
                    <td class={styles.header_table_cell_right}>
                        <Title level={4} style={{ color: "DarkRed" }}>
                            Contact Information
                        </Title>
                    </td>
                </tr>
            </table>
            <Divider />
        </div>
    );
}

// Module export
export default Header;
