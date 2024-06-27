import React from "react";
import {
  View,
  Text,
} from "react-native";
import { ScrollView } from "react-native";
import { BusinessBox } from "../components/utils";

function Business() {
  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
        <Text>Business</Text>
        <Text>View all</Text>
      </View>
      <View>
        <ScrollView horizontal>
          <View className="flex flex-row p-2">
            <BusinessBox image="https://i.pinimg.com/originals/39/79/6a/39796ac6bf7fb5abd5814c8f61bf3ab1.gif" name="Grocery" />
            <BusinessBox image="https://cdnl.iconscout.com/lottie/premium/thumb/finance-profit-11010644-8842003.gif" name="Finance" />
            <BusinessBox image="https://lordicon.com/icons/wired/lineal/1560-barber-chair.gif" name="Barber" />
            <BusinessBox image="https://codafish.net/wp-content/uploads/2021/09/services_overview.gif" name="MP Online" />
            <BusinessBox image="https://codafish.net/wp-content/uploads/2021/09/services_overview.gif" name="Potter" />
          </View>
        </ScrollView>
        <View className="">
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            delectus animi asperiores? Obcaecati velit nihil atque dolor, porro
            totam placeat quae est temporibus beatae consequuntur ducimus,
            adipisci, dignissimos voluptatibus saepe nam fugiat rerum. Ipsum
            cupiditate eveniet id nostrum sint dolores praesentium, similique
            quas est reprehenderit impedit quisquam aut facere? Sint!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Business;
