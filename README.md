# node-thread-safe

A tiny rewrite to safe guard a code from parallel requests - Mutual Exclusion Lock

```

// sample usage

 try {
    await Mutex.RunSafe(async () => {
      //! start safe code
      const { user_id, amount } = req.body
      if (user_id && amount) {
        const bal = await handler.Bal(user_id)
        if (+bal >= +amount) {
          const deb_id = await handler.DebitBal(user_id, +amount)
          return res.send(`good - ${deb_id}`)
        } else {
          return res.send("insufficient balance")
        }
      } else {
        res.sendStatus(400)
      }
      //! end safe code
    })
  } catch (ex) {
    console.log('\x1b[41m%s\x1b[0m', 'handled error', ex.message)
    res.sendStatus(503)
  }




```
