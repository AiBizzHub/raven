import { BiInfoCircle } from "react-icons/bi"
import { Link as RadixLink, Text } from "@radix-ui/themes"
import { CustomCallout } from "@/components/common/Callouts/CustomCallout"
import { useFrappeGetCall } from "frappe-react-sdk"

const ServerScriptNotEnabledCallout = () => {

    const { data } = useFrappeGetCall("frappe.core.doctype.server_script.server_script.enabled", undefined, undefined, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    if (data?.message) {
        return null
    }

    return (
        <CustomCallout
            iconChildren={<BiInfoCircle size='18' />}
            rootProps={{ color: 'yellow' }}
            textChildren={<Text>Server scripts are not enabled on this site. Please contact support for more information.</Text>}
        />
    )
}

export default ServerScriptNotEnabledCallout