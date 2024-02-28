import { Button, Layout, Image, Form, Checkbox,Radio, Input, Popover, Menu, Drawer, Breadcrumb, Typography, message, Divider, Table, DatePicker, Popconfirm, Space, InputNumber, Select, PageHeader, Steps, Statistic, Transfer, Upload, Switch, Modal, Tabs } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.min.css'

const components = [
    Button,
    Layout,
    Form,
    Input,
    Menu,
    Breadcrumb,
    Table,
    Popconfirm,
    Select,
    PageHeader,
    Steps,
    Transfer,
    Upload,
    Switch,
    Modal,
    Tabs,
    Statistic,
    InputNumber,
    Space,
    DatePicker,
    Divider,
    Image,
    Typography,
    Drawer,
    Popover,
    Radio,
    Checkbox
]

export function setupAntd(app) {
    components.forEach(component => {
        app.use(component)
    })
    app.config.globalProperties.$message = message
}