import ServicesDiagnostic from "@/components/Services/ServicesDiagnostic";
import ServicesRepair from "@/components/Services/ServicesRepair";
import ServicesSetting from "@/components/Services/ServicesSetting";
import Divider from "@/components/common/Divider";
import { Layout } from "@/components/common/Layout";

export default function Services() {
  return (
    <Layout>
      <ServicesRepair />
      <Divider />
      <ServicesDiagnostic />
      <Divider />
      <ServicesSetting />
    </Layout>
  );
}
