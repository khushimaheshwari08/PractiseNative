import React, { useState } from 'react'
import {StyleSheet, Button, View } from 'react-native'
import DatePicker from 'react-native-date-picker'

const DateTime =  () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (

    <View style={styles.container}>
      <Button style={styles.button} title="Open Date and Time" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </View>

  )
}
export default DateTime;

const styles = StyleSheet.create({
    container:{
        margin:20

    },
})