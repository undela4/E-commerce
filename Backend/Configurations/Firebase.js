const  admin =require('firebase-admin');

const firebaseConfig={
    "type": "service_account",
    "project_id": "react-647c1",
    "private_key_id": "ecb692bbfdf97b768bc51771db22fb94d6d88e81",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyYQuM/pHt1Eyb\nEO2iXfT0gvkV+KjUQkGJCk1xDNAwogDMq77hwQdDRaFwK2XFa74UPd8gEnGbYxRU\n2JQMD3g61G6GDx7tL+DyKzXhvgW+XIBzJCTsVfb6ZNqhInvjqvSvKtfSppEifhha\nUDAHstz6YISNAZQK7CYtW6pjw5a98Hvhzguio1fNKJzp8yaQQwwtZDiRBw7422Wb\nVL9n1yODoTO55drRO8ZVjhWwObSgT+Qpk5sXOkARnn29aVL05KyHyvNN4W/uvxN4\nPFkmyDoS/al161GMJyVxB+svoGuy70RM6DxZpmv51IBhR0Ciew9z9WAxEWfnbYS0\neJqD9CJbAgMBAAECggEAOWclcnARwflJ1bTy5AdcZrsnMTzeB8BymokoNrMq5Bue\nKj8ypC+cCLgFpbUxgQCVIKpwfT+yM5EE3/D6Y48u36+xCY8gIq//sa7aHhUqgAIA\njA0bnLplSlreSHByced36k7dOTrFBdaSO64GZtPWbPRWc5IIdCNefcY75PLyNZj9\nnXxEIJvvy5svOZqv76RSajSDVylxe7geDpN/T2TjUb1zbisZHJXAvDNGvbm9QPHE\nw2MetHf5HI6gaxZPpCX+u5+CeE+Hf5Iio/VT5Q+8mBYK3JIFVvuKNGjVPFpcu6sB\nrYR5UbstzsZ+WK7KHTd/NrMCOxRibhT7JfpMrx3qsQKBgQDw8WrO2Qt/LDewHyG8\nzBMZxFpxSXN1HU1UDcKnTIGOSeOQV+Rk1F6b9boUqL7Epmnk601YOVsjynGRXM56\nsr8ecmlyPniD9L/rjkJ2EvQRr7d3P7ToY4Zs8DNqumL85QFeTSk7fKkQ9GeGlpD9\nUF4FL0rt/wteg1AVJYzptQUKzwKBgQC9hrxpRsOc0OBJArqS/Auai7f4hGF2G6Bm\nfU+BBVAQOqEyHITOxbJAkGG+1pSotxNybFREkjEyHu1zoKN0R87BHkNmTyk4s9dE\nMgfGc0QHqiexXeUC6p0pcKYpVojZFp4VenCULEvZMFf2bWbqlq0YFFPpcUgf12/8\nkjqhkcwitQKBgQCeQoScf1Yc30doyNoZL5ZwO1gIx20uBOQxDKTJzOfgNUpjGkgr\nro7CNEJYpYpAkupFcgUoqOvjc2rrRyFc2KHOduoqHzx7uDyDlbqz4bktENUaX98N\nMaovTgsH1IuGf0lJzrcBmt1WBKMndSihKrPHBgxajUbDes8URMjtDXjVYwKBgCGg\nglV7hMGSHflWTpw9tCFboOyrME+wXylQGocd1jLK9Ebb4IR/dz0VYQJnOEEnGoA2\n0EzKU4g9DIxzeAztoLWLFRJWAU5aOluTNOX1FaD2g8xoiHWYAwKTRigXfnhmFu5g\npxDjOyHx/elvR89fpJ6dHLZSryVXKDt8BoMcR0fxAoGBAKpZ6diJHtIiEF8fO4nP\nCfCbjorMhx8qYN02ydjObIQ+5xriyH9LiOck1yBhjYsdJVRQUc/6aakgHE6qfKN1\nBj92kbzB4UDi1q3TTfobJ8YljdhX8kmBfzFMBomaZS3XDE/muFgRhDm4CMq/I4Yl\nsWDI1Ixfs6OeV+N3FwKzyR2R\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-cxxwd@react-647c1.iam.gserviceaccount.com",
    "client_id": "112162888285170878663",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cxxwd%40react-647c1.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }

exports.firebase=()=>{

    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        storageBucket:'gs://react-647c1.appspot.com/'
    });
    console.log("Firebase Connected.");
}