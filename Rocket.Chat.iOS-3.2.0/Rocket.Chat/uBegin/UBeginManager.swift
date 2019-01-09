//
//  UBeginManager.swift
//  uBegin.Chat
//
//  Created by sultanbekov on 10/2/18.
//  Copyright © 2018 uBegin.Chat. All rights reserved.
//

import Foundation

class UBeginManager {
    static func sendForgotPassword(forEmail email: String, completion: @escaping (_ error: Error?) -> Void) {
        guard let url = URL(string: "https://api-stage.ubegin.com/user/password/reset/initiate") else { return }
        var request = URLRequest(url: url, cachePolicy: .reloadIgnoringLocalCacheData, timeoutInterval: 60.0)
        request.httpMethod = "POST"
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpBody = try? JSONSerialization.data(withJSONObject: ["email": email])
        URLSession.shared.dataTask(with: request) { (_, _, error) in
            completion(error)
            }.resume()
    }
}
